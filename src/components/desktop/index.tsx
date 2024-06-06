import { AnimatePresence } from 'framer-motion';

import wallpapperLight from '@/assets/images/wallpapper-light.png';
import { useWindowManagerStore } from '@/stores/windowManager';

import { BottonBar } from './components/bottomBar';
import { LockScreen } from './components/lockScreen';
import { Topbar } from './components/topbar';
import { Window } from './components/window';

export const Desktop = () => {
  const windows = useWindowManagerStore((state) => state.windows);

  const renderWindows = () =>
    windows.map(
      (window) =>
        !window.isMinimized &&
        window.isOpen && <Window id={window.id} name={window.name} />
    );

  return (
    <main
      style={{
        background: `url(${wallpapperLight.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className="h-screen bg-base"
    >
      <Topbar />
      <AnimatePresence>{renderWindows()}</AnimatePresence>
      <LockScreen />
      <BottonBar />
    </main>
  );
};
