import { nanoid } from 'nanoid';
import { create } from 'zustand';

import settings from '@/assets/images/config.png';
import folder from '@/assets/images/folders.png';
import type { WindowTypes } from '@/types/windows';

interface WindowManagerStoreTypes {
  windows: WindowTypes[];
  findWindow: (windowId: string) => WindowTypes | undefined;
  handleMainWindow: (windowId: string) => void;
  toggleWindow: (windowId: string, open?: boolean) => void;
  minimizeWindow: (windowId: string, minimized?: boolean) => void;
}

export const useWindowManagerStore = create<WindowManagerStoreTypes>()(
  (set, get) => ({
    windows: [
      {
        id: nanoid(),
        isOpen: false,
        isMain: true,
        isMinimized: false,
        name: 'Settings' as const,
        image: settings.src,
      },
      {
        id: nanoid(),
        isOpen: false,
        isMain: false,
        isMinimized: false,
        name: 'File Explorer' as const,
        image: folder.src,
      },
    ],

    findWindow(windowId) {
      return get().windows.find((window) => window.id === windowId);
    },

    toggleWindow(windowId, open) {
      set((state) => ({
        windows: state.windows.map((window) =>
          window.id === windowId
            ? {
                ...window,
                isOpen: open ?? !window.isOpen,
                isMain: open ?? !window.isOpen,
              }
            : { ...window, isMain: false }
        ),
      }));
    },

    handleMainWindow(windowId) {
      set((state) => ({
        windows: state.windows.map((window) =>
          window.id === windowId
            ? { ...window, isMain: true }
            : { ...window, isMain: false }
        ),
      }));
    },

    minimizeWindow(windowId, minimized) {
      set((state) => ({
        windows: state.windows.map((window) =>
          window.id === windowId
            ? { ...window, isMinimized: minimized ?? !window.isMinimized }
            : window
        ),
      }));
    },
  })
);
