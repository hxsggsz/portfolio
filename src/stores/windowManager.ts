import { nanoid } from 'nanoid';
import { create } from 'zustand';

import settings from '@/assets/images/config.png';
import folder from '@/assets/images/folders.png';
import type { WindowTypes } from '@/types/windows';

interface WindowManagerStoreTypes {
  windows: WindowTypes[];
  toggleWindow: (windowId: string, open?: boolean) => void;
  minimizeWindow: (windowId: string, minimized?: boolean) => void;
}

export const useWindowManagerStore = create<WindowManagerStoreTypes>()(
  (set) => ({
    windows: [
      {
        id: nanoid(),
        isOpen: false,
        isMinimized: false,
        name: 'Settings' as const,
        image: settings.src,
      },
      {
        id: nanoid(),
        isOpen: false,
        isMinimized: false,
        name: 'File Explorer' as const,
        image: folder.src,
      },
    ],

    toggleWindow(windowId, open) {
      set((state) => ({
        windows: state.windows.map((window) =>
          window.id === windowId
            ? { ...window, isOpen: open ?? !window.isOpen }
            : window
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
