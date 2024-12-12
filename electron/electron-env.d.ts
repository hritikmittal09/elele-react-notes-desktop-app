/// <reference types="vite-electron-plugin/electron-env" />

import 'react';

declare namespace NodeJS {
  interface ProcessEnv {
    VSCODE_DEBUG?: 'true';
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬ dist-electron
     * │ ├─┬ main
     * │ │ └── index.js    > Electron-Main
     * │ └─┬ preload
     * │   └── index.mjs   > Preload-Scripts
     * ├─┬ dist
     * │ └── index.html    > Electron-Renderer
     * ```
     */
    APP_ROOT: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

declare module 'react' {
  interface CSSProperties {
    /** Electron-specific drag regions */
    WebkitAppRegion?: 'drag' | 'no-drag';
  }
}
