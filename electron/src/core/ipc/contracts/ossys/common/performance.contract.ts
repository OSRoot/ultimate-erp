/**
 * OSsys.Performance Contracts
 * -----------------------------------------------------
 * Handles system performance monitoring,
 * profiling, and optimization hooks.
 */
export namespace OSsys {
  export namespace Performance {
    export interface Metrics {
      cpuUsage: number;  // CPU usage in percentage
      memoryUsage: number;  // Memory usage in Bytes
      gpuUsage: number;  // GPU usage in percentage
      ioRead: number;  // I/O read in Bytes/sec
      ioWrite: number;  // I/O write in Bytes/sec
      fps: number;  // Frames per second
      cpuTemp: number;  // CPU temperature in Celsius
      gpuTemp: number;  // GPU temperature in Celsius
      diskUsage: number;  // Disk usage in Bytes
      networkUsage: number;  // Network usage in Bytes
      batteryUsage: number;  // Battery usage in percentage
      batteryTemp: number;  // Battery temperature in Celsius
      ramUsage: number;  // RAM usage in Bytes
      ramTemp: number;  // RAM temperature in Celsius
      diskTemp: number;  // Disk temperature in Celsius
      diskRead: number;  // Disk read in Bytes/sec
      diskWrite: number;  // Disk write in Bytes/sec
      networkRead: number;  // Network read in Bytes/sec
      networkWrite: number;  // Network write in Bytes/sec
      batteryCharge: number;  // Battery charge in percentage
      batteryDischarge: number;  // Battery discharge in percentage
      batteryLevel: number;  // Battery level in percentage

      // Add more metrics as needed
      timestamp: number // Timestamp in milliseconds

    }


    export interface ProfileStartedPayload {
      target: "system" | "workspace" | "window" | "process";
      id?: string; // ID of the target (winId, workspaceId, pid)
    }

    export interface ProfileStoppedPayload {
      target: "system" | "workspace" | "window" | "process";
      id?: string; // ID of the target (winId, workspaceId, pid)
    }


  }
}
