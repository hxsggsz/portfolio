import { create } from 'zustand';

type ThemeTypes = 'light' | 'dark' | 'system';

interface ThemeModeStoreTypes {
  theme: ThemeTypes;
  setTheme: (theme: ThemeTypes) => void;
}

export const useThemeModeStore = create<ThemeModeStoreTypes>()((set) => ({
  theme: 'light',
  setTheme(theme) {
    set({ theme });
  },
}));
