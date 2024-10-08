import { AnimatePresence } from 'framer-motion';

import wallpapperDark from '@/assets/images/wallpapper-dark.png';
import wallpapperLight from '@/assets/images/wallpapper-light.png';
import { BottonBar } from '@/components/desktop/components/bottomBar';
import { Topbar } from '@/components/desktop/components/topbar';
import { FileExplorer } from '@/components/desktop/components/windows/fileExplorer/fileExplorer';
import { Settings } from '@/components/desktop/components/windows/settings';
import { Toast } from '@/components/toast';
import { useThemeMode } from '@/hooks/useThemeMode';
import { useWindowManagerStore } from '@/stores/windowManager';
import type { HygraphResponse } from '@/types/api';
import type { WindowNames } from '@/types/windows';

import { Resume } from './components/resume';
import { SocialMedia } from './components/social-media';
import { Discord } from './components/windows/discord/discord';

interface WindowsTyped {
  name: WindowNames;
  component: React.ReactNode;
}

export const Desktop = (props: HygraphResponse) => {
  const { theme } = useThemeMode();

  const windows = useWindowManagerStore((state) => state.windows);

  const renderCustomWindows = (id: string, name: string) => {
    const allWindows: Array<WindowsTyped> = [
      {
        name: 'File Explorer',
        component: <FileExplorer key={id} id={id} {...props} />,
      },
      {
        name: 'Settings',
        component: <Settings key={id} id={id} />,
      },
      {
        name: 'Discord',
        component: <Discord key={id} id={id} discord={props.discords} />,
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

  const getLocalStorageImage = localStorage.getItem('@background');
  const selectDarkModeBackground =
    theme === 'dark' ? wallpapperDark.src : wallpapperLight.src;

  const selectDesktopBackground =
    getLocalStorageImage ?? selectDarkModeBackground;

  return (
    <main
      style={{
        backgroundImage: `url(${selectDesktopBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className="h-screen bg-base"
    >
      <Topbar />
      <Toast />

      <div className="flex w-min flex-col flex-wrap items-center justify-start gap-4 p-4">
        <Resume />
        <SocialMedia />
      </div>

      <AnimatePresence>{renderWindows()}</AnimatePresence>
      <BottonBar />
    </main>
  );
};
