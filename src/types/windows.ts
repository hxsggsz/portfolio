export type WindowNames =
  | 'Experiences'
  | 'Settings'
  | 'File Explorer'
  | 'Discord';

export interface WindowTypes {
  id: string;
  name: WindowNames;
  image: string;
  isFullscreen: boolean;
  isOpen: boolean;
  isMain: boolean;
  isMinimized: boolean;
}

export interface DefaultWindowProps {
  id: string;
}

export interface UseImperativeWindowHandler {
  toggleOpen: (open?: boolean) => void;
}
