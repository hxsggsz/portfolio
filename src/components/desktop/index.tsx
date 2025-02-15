import wallpapperDark from '@/assets/images/wallpapper-dark.png';
import wallpapperLight from '@/assets/images/wallpapper-light.png';
import { BottonBar } from '@/components/desktop/components/bottomBar';
import { Topbar } from '@/components/desktop/components/topbar';
import { Devto } from '@/components/desktop/icons/devto';
import { Resume } from '@/components/desktop/icons/resume/';
import { SocialMedia } from '@/components/desktop/icons/social-media/';
import { Toast } from '@/components/toast';
import { useThemeMode } from '@/hooks/useThemeMode';
import type { HygraphResponse } from '@/types/api';

import { Discord } from './icons/discord';
import { Experiences } from './icons/experiences';

export const Desktop = (props: HygraphResponse) => {
  const { theme } = useThemeMode();

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
      className="flex h-screen flex-col justify-between bg-base"
    >
      <div>
        <Topbar />
        <Toast />

        <div className="flex w-min flex-col flex-wrap items-center justify-start gap-4 p-4">
          <Resume />
          <SocialMedia />
          <Devto />
          <Experiences experiences={props.experiences} />
        </div>
      </div>

      <BottonBar />
    </main>
  );
};
