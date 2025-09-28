import type { CapacitorElectronConfig } from '@capacitor-community/electron';
import { getCapacitorElectronConfig, setupElectronDeepLinking } from '@capacitor-community/electron';
import type { MenuItemConstructorOptions } from 'electron';
import { app, MenuItem } from 'electron';
import electronIsDev from 'electron-is-dev';
import unhandled from 'electron-unhandled';
import { autoUpdater } from 'electron-updater';

import { ElectronCapacitorApp, setupContentSecurityPolicy, setupReloadWatcher } from './setup';
import { IPCMainHandler } from './classes/ipc.class';
import { WindowsManager } from './classes/windows.class';

// ─────────────────────────────────────────────
// 1. Handle uncaught/unhandled errors globally
// ─────────────────────────────────────────────
unhandled();

// ─────────────────────────────────────────────
// 2. Define Menu Templates (optional, customizable)
// ─────────────────────────────────────────────
const trayMenuTemplate: (MenuItemConstructorOptions | MenuItem)[] = [
  new MenuItem({ label: 'Quit App', role: 'quit' }),
];
const appMenuBarMenuTemplate: (MenuItemConstructorOptions | MenuItem)[] = [
  { role: process.platform === 'darwin' ? 'appMenu' : 'fileMenu' },
  { role: 'viewMenu' },
];

// ─────────────────────────────────────────────
// 3. Load Capacitor Config
// ─────────────────────────────────────────────
const capacitorFileConfig: CapacitorElectronConfig = getCapacitorElectronConfig();

// ─────────────────────────────────────────────
// 4. Initialize Core Application Classes
// ─────────────────────────────────────────────
const myCapacitorApp = new ElectronCapacitorApp(
  capacitorFileConfig,
  trayMenuTemplate,
  appMenuBarMenuTemplate
);
const windowManager = new WindowsManager(myCapacitorApp.getCustomURLScheme());
const ipcHandler = new IPCMainHandler(myCapacitorApp, windowManager);

// ─────────────────────────────────────────────
// 5. Setup Deep Linking (optional)
// ─────────────────────────────────────────────
if (capacitorFileConfig.electron?.deepLinkingEnabled) {
  setupElectronDeepLinking(myCapacitorApp, {
    customProtocol: capacitorFileConfig.electron.deepLinkingCustomProtocol ?? 'mycapacitorapp',
  });
}

// ─────────────────────────────────────────────
// 6. Setup Hot Reloading for Dev Mode
// ─────────────────────────────────────────────
if (electronIsDev) {
  setupReloadWatcher(myCapacitorApp);
}

// ─────────────────────────────────────────────
// 7. Run Application
// ─────────────────────────────────────────────
(async () => {
  await app.whenReady();

  // Security policy based on environment
  setupContentSecurityPolicy(myCapacitorApp.getCustomURLScheme());

  // Init main window
  await myCapacitorApp.init();

  // Init IPC bindings
  ipcHandler.init();

  // Auto-update when packaged
  if (!electronIsDev) {
    autoUpdater.checkForUpdatesAndNotify();
  }
})();

// ─────────────────────────────────────────────
// 8. Handle Window Lifecycle
// ─────────────────────────────────────────────
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (myCapacitorApp.getMainWindow().isDestroyed()) {
    await myCapacitorApp.init();
  }
});
