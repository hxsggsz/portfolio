import { AnimatePresence } from 'framer-motion';

import wallpapperDark from '@/assets/images/wallpapper-dark.png';
import wallpapperLight from '@/assets/images/wallpapper-light.png';
import { useThemeMode } from '@/hooks/useThemeMode';
import { useWindowManagerStore } from '@/stores/windowManager';
import type { WindowNames } from '@/types/windows';

import { BottonBar } from './components/bottomBar';
import { Topbar } from './components/topbar';
import { Settings } from './components/windows/settings';

interface WindowsTyped {
  name: WindowNames;
  component: React.ReactNode;
}

export const Desktop = () => {
  const { theme } = useThemeMode();
  const windows = useWindowManagerStore((state) => state.windows);

  const renderCustomWindows = (id: string, name: string) => {
    const allWindows: Array<WindowsTyped> = [
      {
        name: 'Settings',
        component: <Settings key={id} id={id} />,
      },
    ];

    const findWindow = allWindows.find((window) => window.name === name);
    return findWindow && findWindow.component;
  };

  const renderWindows = () =>
    windows.map(
      (window) =>
        !window.isMinimized &&
        window.isOpen &&
        renderCustomWindows(window.id, window.name)
    );

  return (
    <main
      style={{
        backgroundImage: `url(${theme === 'dark' ? wallpapperDark.src : wallpapperLight.src
          })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className="h-screen bg-base"
    >
      <Topbar />
      <AnimatePresence>{renderWindows()}</AnimatePresence>
      <BottonBar />
    </main>
  );
};
