import github from '@/assets/images/github.png';
import linkedin from '@/assets/images/linkedin.svg';
import { DesktopItems } from '@/components/desktop/icons/desktop-icon';
import { GITHUB_LINK, LINKEDIN_LINK } from '@/constants/resume';

export const SocialMedia = () => {
  return (
    <>
      <DesktopItems
        name="Github"
        icon={github.src}
        onDoubleClick={() => window.open(GITHUB_LINK)}
      />

      <DesktopItems
        name="Linkedin"
        icon={linkedin.src}
        onDoubleClick={() => window.open(LINKEDIN_LINK)}
      />
    </>
  );
};
