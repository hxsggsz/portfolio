import { useEffect } from 'react';

import { useThemeModeStore } from '@/stores/themeMode';

export function useThemeMode() {
  const { theme, setTheme } = useThemeModeStore();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  return { theme, setTheme };
}
