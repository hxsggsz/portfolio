export type WindowNames = 'Settings' | 'File Explorer';

export interface WindowTypes {
  id: string;
  name: WindowNames;
  image: string;
  isOpen: boolean;
  isMinimized: boolean;
}

export interface DefaultWindowProps {
  id: string;
}
