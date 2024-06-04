import { create } from 'zustand';

interface LockScreenStoreTypes {
  shouldClose: boolean;
  setShouldClose: (shouldClose: boolean) => void;
}

export const useLockScreenStore = create<LockScreenStoreTypes>()((set) => ({
  shouldClose: false,
  setShouldClose(shouldClose) {
    set({ shouldClose });
  },
}));
