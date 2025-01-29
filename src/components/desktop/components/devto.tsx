import devto from '@/assets/images/dev-to.png';
import { DEVTO_LINK } from '@/constants/resume';

import { DesktopItems } from './desktop-items';

export const Devto = () => {
  return (
    <DesktopItems
      name="Devto"
      icon={devto.src}
      onDoubleClick={() => window.open(DEVTO_LINK)}
    />
  );
};
