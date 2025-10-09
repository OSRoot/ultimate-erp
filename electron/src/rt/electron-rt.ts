// src/rt/electron-rt.ts
import { contextBridge, ipcRenderer } from "electron";
import { randomBytes } from "crypto";
import { EventEmitter } from "events";

// -----------------------------------------------------------------------------
// 🧩 Lazy Controller Loader
// -----------------------------------------------------------------------------
let controllersCache: Record<string, any> | null = null;

/**
 * Lazy load all backend controllers (once)
 */
const loadControllers = (): Record<string, any> => {
  if (!controllersCache) {
    controllersCache = require("../main/classes");
  }
  return controllersCache!;
};

/**
 * Generate a short random listener ID
 */
const randomListenerId = (len = 6) => randomBytes(len).toString("hex");

// Global API registry
const OSsysAPI: Record<string, any> = {};

// -----------------------------------------------------------------------------
// ⚙️ Controller Registration
// -----------------------------------------------------------------------------
const registerController = (subsysKey: string, classKey: string) => {
  const controllers = loadControllers();
  const subsys = controllers[subsysKey];
  if (!subsys) throw new Error(`Subsystem not found: ${subsysKey}`);

  const controller = subsys[classKey];
  if (!controller) throw new Error(`Controller not found: ${classKey}`);

  const prototype = controller?.prototype;
  if (!prototype) return;

  const classAPI: Record<string, any> = {};
  const fnList = Object.getOwnPropertyNames(prototype).filter((m) => m !== "constructor");

  // ---- Register methods as IPC invokers
  for (const fnKey of fnList) {
    const channel = `${subsysKey}.${classKey}.${fnKey}`;
    classAPI[fnKey] = (...args: any[]) => ipcRenderer.invoke(channel, ...args);
  }

  // ---- Register event interface if EventEmitter
  if (prototype instanceof EventEmitter) {
    const listeners: Record<string, { type: string; listener: (...args: any[]) => void }> = {};
    const hasListenerOfType = (type: string) =>
      Object.values(listeners).some((l) => l.type === type);

    Object.assign(classAPI, {
      addListener(type: string, callback: (...args: any[]) => void) {
        const id = randomListenerId();
        if (!hasListenerOfType(type))
          ipcRenderer.send(`event-add-${subsysKey}:${classKey}`, type);

        const handler = (_: any, ...args: any[]) => callback(...args);
        ipcRenderer.addListener(`event-${subsysKey}:${classKey}:${type}`, handler);
        listeners[id] = { type, listener: handler };
        return id;
      },

      removeListener(id: string) {
        const entry = listeners[id];
        if (!entry) return;
        ipcRenderer.removeListener(`event-${subsysKey}:${classKey}:${entry.type}`, entry.listener);
        delete listeners[id];
        if (!hasListenerOfType(entry.type))
          ipcRenderer.send(`event-remove-${subsysKey}:${classKey}`, entry.type);
      },

      removeAllListeners(type?: string) {
        for (const [id, entry] of Object.entries(listeners)) {
          if (!type || entry.type === type) {
            ipcRenderer.removeListener(`event-${subsysKey}:${classKey}:${entry.type}`, entry.listener);
            ipcRenderer.send(`event-remove-${subsysKey}:${classKey}`, entry.type);
            delete listeners[id];
          }
        }
      },
    });
  }

  if (!OSsysAPI[subsysKey]) OSsysAPI[subsysKey] = {};
  OSsysAPI[subsysKey][classKey] = classAPI;
};

// -----------------------------------------------------------------------------
// 🧭 Controller Accessor
// -----------------------------------------------------------------------------
const getController = (subsysKey: string, classKey: string) => {
  if (!OSsysAPI[subsysKey] || !OSsysAPI[subsysKey][classKey]) {
    registerController(subsysKey, classKey);
  }
  return OSsysAPI[subsysKey][classKey];
};

// -----------------------------------------------------------------------------
// 🔍 Developer / Debugging Helpers
// -----------------------------------------------------------------------------
const listAvailable = () => {
  const controllers = loadControllers();
  const structure: Record<string, string[]> = {};
  for (const subsysKey of Object.keys(controllers)) {
    const subsys = controllers[subsysKey];
    structure[subsysKey] = Object.keys(subsys);
  }
  return structure;
};

const getMethods = (subsysKey: string, classKey: string): string[] => {
  const controllers = loadControllers();
  const subsys = controllers[subsysKey];
  const controller = subsys?.[classKey];
  if (!controller) return [];
  return Object.getOwnPropertyNames(controller.prototype).filter((m) => m !== "constructor");
};

// -----------------------------------------------------------------------------
// 🧠 Expose to Renderer
// -----------------------------------------------------------------------------
contextBridge.exposeInMainWorld("OSsys", {
  runtime: "electron",
  version: 3,
  getController,
  listAvailable,
  getMethods,
});
