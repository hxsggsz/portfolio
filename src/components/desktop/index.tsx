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
import type {
  AboutMeResponse,
  LanguageResponse,
  ProjectsResponse,
} from '@/types/api';
import type { WindowNames } from '@/types/windows';

import { Resume } from './components/resume';

interface WindowsTyped {
  name: WindowNames;
  component: React.ReactNode;
}

interface DesktopProps {
  aboutMe: AboutMeResponse;
  language: LanguageResponse[];
  projects: ProjectsResponse[];
}

export const Desktop = (props: DesktopProps) => {
  const { theme } = useThemeMode();

  const windows = useWindowManagerStore((state) => state.windows);

  const renderCustomWindows = (id: string, name: string) => {
    const allWindows: Array<WindowsTyped> = [
      {
        name: 'Settings',
        component: <Settings key={id} id={id} />,
      },
      {
        name: 'File Explorer',
        component: <FileExplorer key={id} id={id} {...props} />,
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

      <div className="flex w-full p-4">
        <Resume />
      </div>

      <AnimatePresence>{renderWindows()}</AnimatePresence>
      <BottonBar />
    </main>
  );
};
