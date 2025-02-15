import { useRef } from 'react';

import file from '@/assets/images/files.png';
import { DesktopItems } from '@/components/desktop/icons/desktop-icon';
import { Window } from '@/components/desktop/windows/window/';
import { Loading } from '@/components/loading';
import { useFetcher } from '@/hooks/useFetcher';
import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useTranslations } from '@/i18n/utils';
import type { AboutMeResponse } from '@/types/api';
import type { GithubProfile } from '@/types/github';
import type { UseImperativeWindowHandler } from '@/types/windows';
import { cn } from '@/utils/cn';

interface AboutMeProps {
  aboutMe: AboutMeResponse;
}

export const AboutMe = (props: AboutMeProps) => {
  const windowRef = useRef<UseImperativeWindowHandler>(null);

  const t = useTranslations();

  const windowName = t('abt-me.nav');

  const border = usePrimaryColor('border');
  const thumb = usePrimaryColor('thumb');

  const { data, error, isPending } = useFetcher<GithubProfile>(
    'https://api.github.com/users/hxsggsz'
  );

  const renderError = () => (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      Something went frong: {error}
    </div>
  );
  const renderLoading = () => (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loading width={100} height={100} />
    </div>
  );

  const renderGithubContent = () =>
    data && (
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center pr-2 text-center">
          <img
            className={cn(border.className, 'size-48 border-4 rounded-full')}
            src={data.avatar_url}
            alt={`${data.name}'s profile picture `}
          />

          <h1 className="whitespace-nowrap text-lg font-bold">
            {data.name} - {data.login}
          </h1>

          <p className="whitespace-nowrap">{t('abt-me.occupation')}</p>
        </div>

        <div
          className={cn(
            'pl-2 md:border-l-2 border-white/10 size-full overflow-y-auto scrollbar scrollbar-track-inherit scrollbar-w-1',
            thumb.className
          )}
        >
          <p>{props.aboutMe.aboutMe}</p>
        </div>
      </div>
    );

  return (
    <>
      <DesktopItems
        name={windowName}
        icon={file.src}
        onDoubleClick={() =>
          windowRef.current?.openWindow({ name: windowName, image: file.src })
        }
      />

      <Window name={windowName} ref={windowRef}>
        {isPending ? renderLoading() : renderGithubContent()}
        {error && renderError()}
      </Window>
    </>
  );
};
