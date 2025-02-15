import { create } from 'zustand';

// import settings from '@/assets/images/config.png';
// import discord from '@/assets/images/discord.png';
// import folder from '@/assets/images/folders.png';
import type { WindowTypes } from '@/types/windows';

interface OpenWindowsStoreTypes {
  openWindows: WindowTypes[];
  addWindow: (newWindow: WindowTypes) => void;
  removeWindow: (windowName: string) => void;
}

export const useOpenWindowsStore = create<OpenWindowsStoreTypes>()(
  (set, get) => ({
    openWindows: [],
    addWindow: (newWindow) => {
      const findWindow = get().openWindows.find(
        (window) => window.name === newWindow.name
      );
      set((state) => ({
        openWindows: !findWindow
          ? [...state.openWindows, newWindow]
          : state.openWindows,
      }));
    },

    removeWindow: (windowName) => {
      const newWindows = get().openWindows.filter(
        (window) => window.name !== windowName
      );

      set({ openWindows: newWindows });
    },
    // bottomBarWindows: [
    //   {
    //     id: nanoid(),
    //     isOpen: false,
    //     isMain: true,
    //     isFullscreen: false,
    //     isMinimized: false,
    //     name: 'Settings' as const,
    //     image: settings.src,
    //   },
    //   {
    //     id: nanoid(),
    //     isOpen: false,
    //     isMain: false,
    //     isFullscreen: false,
    //     isMinimized: false,
    //     name: 'File Explorer' as const,
    //     image: folder.src,
    //   },
    //   {
    //     id: nanoid(),
    //     isOpen: false,
    //     isMain: false,
    //     isFullscreen: false,
    //     isMinimized: false,
    //     name: 'Discord' as const,
    //     image: discord.src,
    //   },
    // ],

    // findWindow(windowId) {
    //   const findWindows = get().windows.find(
    //     (window) => window.id === windowId
    //   );

    //   const findBottomWindows = get().bottomBarWindows.find(
    //     (window) => window.id === windowId
    //   );

    //   return findBottomWindows ?? findWindows;
    // },

    // toggleFullScreen(windowId, open) {
    //   set((state) => ({
    //     windows: state.windows.map((window) =>
    //       window.id === windowId
    //         ? {
    //             ...window,
    //             isFullscreen: open ?? !window.isFullscreen,
    //           }
    //         : window
    //     ),
    //   }));
    // },

    // toggleWindow(windowId, open) {
    //   set((state) => ({
    //     windows: state.windows.map((window) =>
    //       window.id === windowId
    //         ? {
    //             ...window,
    //             isOpen: open ?? !window.isOpen,
    //             isMain: open ?? !window.isOpen,
    //           }
    //         : { ...window, isMain: false }
    //     ),
    //   }));
    // },

    // handleMainWindow(windowId) {
    //   set((state) => ({
    //     windows: state.windows.map((window) =>
    //       window.id === windowId
    //         ? { ...window, isMain: true }
    //         : { ...window, isMain: false }
    //     ),
    //   }));
    // },

    // minimizeWindow(windowId, minimized) {
    //   set((state) => ({
    //     windows: state.windows.map((window) =>
    //       window.id === windowId
    //         ? { ...window, isMinimized: minimized ?? !window.isMinimized }
    //         : window
    //     ),
    //   }));
    // },
  })
);
