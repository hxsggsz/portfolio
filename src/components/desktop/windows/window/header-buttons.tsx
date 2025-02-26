import { Browser, Browsers, X } from '@phosphor-icons/react';

interface HeaderButtonsProps {
  isFullScreen: boolean;
  closeWindow: () => void;
  updateFullscreen: (fullScreenValue: boolean) => void;
}

export const HeaderButtons = (props: HeaderButtonsProps) => {
  return (
    <div className="flex">
      <button
        onClick={() => props.updateFullscreen(!props.isFullScreen)}
        className="rounded-md p-0.5 hover:bg-gold active:bg-white/60"
      >
        {props.isFullScreen ? <Browser size={20} /> : <Browsers size={20} />}
      </button>

      <button
        onClick={() => props.closeWindow()}
        className="rounded-md p-0.5 hover:bg-love active:bg-white/60"
      >
        <X size={20} />
      </button>
    </div>
  );
};
