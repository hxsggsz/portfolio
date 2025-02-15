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

import { AboutMe } from './icons/about-me';
import { Discord } from './icons/discord';
import { Experiences } from './icons/experiences';
import { Languages } from './icons/languages';
import { Settings } from './icons/settings';

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

        <div className="flex max-h-desktop w-min flex-col flex-wrap items-center justify-start gap-4 p-4">
          <Settings />
          <Resume />
          <SocialMedia />
          <Devto />
          <Discord discord={props.discords} />
          <Experiences experiences={props.experiences} />
          <AboutMe aboutMe={props.aboutMe} />
          <Languages languages={props.language} />
        </div>
      </div>

      <BottonBar />
    </main>
  );
};
