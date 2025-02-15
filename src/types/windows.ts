export interface WindowTypes {
  name: string;
  image: string;
}

export interface DefaultWindowProps {
  id: string;
}

export interface UseImperativeWindowHandler {
  openWindow: (newWindow: WindowTypes) => void;
}
