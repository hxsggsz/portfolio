export type WindowNames = 'Settings' | 'File Explorer' | 'Discord';

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
