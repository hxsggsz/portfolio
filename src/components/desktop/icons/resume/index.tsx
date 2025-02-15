import file from '@/assets/images/files.png';
import { DesktopItems } from '@/components/desktop/icons/desktop-icon';
import { EN_RESUME_LINK, PT_RESUME_LINK } from '@/constants/resume';
import { getLangFromUrl, useTranslations } from '@/i18n/utils';

export const Resume = () => {
  const t = useTranslations();
  const lang = getLangFromUrl();

  return (
    <DesktopItems
      name={`${t('res.title')}.pdf`}
      icon={file.src}
      onDoubleClick={() =>
        window.open(lang === 'en-us' ? EN_RESUME_LINK : PT_RESUME_LINK)
      }
    />
  );
};
