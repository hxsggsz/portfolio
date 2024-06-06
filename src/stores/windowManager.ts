import { nanoid } from 'nanoid';
import { create } from 'zustand';

import config from '@/assets/images/config.png';

interface WindowManagerStoreTypes {
  windows: WindowTypes[];
  toggleWindow: (windowId: string, open?: boolean) => void;
  minimizeWindow: (windowId: string, minimized?: boolean) => void;
}

interface WindowTypes {
  id: string;
  name: string;
  image: string;
  isOpen: boolean;
  isMinimized: boolean;
}

export const useWindowManagerStore = create<WindowManagerStoreTypes>()(
  (set) => ({
    windows: [
      {
        id: nanoid(),
        isOpen: false,
        isMinimized: false,
        name: 'config',
        image: config.src,
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
