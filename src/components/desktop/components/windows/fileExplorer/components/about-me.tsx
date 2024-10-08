import { Loading } from '@/components/loading';
import { useFetcher } from '@/hooks/useFetcher';
import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useTranslations } from '@/i18n/utils';
import type { AboutMeResponse } from '@/types/api';
import type { GithubProfile } from '@/types/github';
import { cn } from '@/utils/cn';

interface AboutMeProps {
  aboutMe: AboutMeResponse;
}

export const AboutMe = (props: AboutMeProps) => {
  const t = useTranslations();

  const border = usePrimaryColor('border');
  const thumb = usePrimaryColor('thumb');

  const { data, isPending } = useFetcher<GithubProfile>(
    'https://api.github.com/users/hxsggsz'
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
    <div className="flex size-full w-full justify-center whitespace-break-spaces">
      {isPending ? renderLoading() : renderGithubContent()}
    </div>
  );
};
