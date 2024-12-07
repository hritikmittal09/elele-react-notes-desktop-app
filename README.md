# Electron React To-Do App

A simple experimental project to combine **React** and **Electron** into a desktop application. This app is styled using **Tailwind CSS** and **DaisyUI**, and it uses **localStorage** for saving tasks locally.

---

## Features

- **Add Tasks**: Add new tasks with task types (e.g., One-time Task, Daily Task, Reminder).
- **View Tasks**: Displays tasks in a clean and responsive UI.
- **Task Management**: Allows categorization and management of tasks.
- **Window Behavior**: 
  - The app reduces opacity when out of focus and restores full opacity when in focus.
  - Always opens in the top-right corner of the screen.
- **Theming**: Styled using Tailwind CSS and DaisyUI.

---

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn installed


## 🛫 Quick Setup

```sh


# install dependency
npm install

# develop
npm run dev
```



## 📂 Directory structure

Familiar React application structure, just with `electron` folder on the top :wink:  
*Files in this folder will be separated from your React application and built into `dist-electron`*  

```tree
├── electron                                 Electron-related code
│   ├── main                                 Main-process source code
│   └── preload                              Preload-scripts source code
│
├── release                                  Generated after production build, contains executables
│   └── {version}
│       ├── {os}-{os_arch}                   Contains unpacked application executable
│       └── {app_name}_{version}.{ext}       Installer for the application
│
├── public                                   Static assets
└── src                                      Renderer source code, your React application
```

<!--
## 🚨 Be aware

This template integrates Node.js API to the renderer process by default. If you want to follow **Electron Security Concerns** you might want to disable this feature. You will have to expose needed API by yourself.  

To get started, remove the option as shown below. This will [modify the Vite configuration and disable this feature](https://github.com/electron-vite/vite-plugin-electron-renderer#config-presets-opinionated).

```diff
# vite.config.ts

export default {
  plugins: [
    ...
-   // Use Node.js API in the Renderer-process
-   renderer({
-     nodeIntegration: true,
-   }),
    ...
  ],
}
```
-->

