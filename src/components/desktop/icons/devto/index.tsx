import devto from '@/assets/images/dev-to.png';
import { DesktopItems } from '@/components/desktop/icons/desktop-icon';
import { DEVTO_LINK } from '@/constants/resume';

export const Devto = () => {
  return (
    <DesktopItems
      name="Devto"
      icon={devto.src}
      onDoubleClick={() => window.open(DEVTO_LINK)}
    />
  );
};
