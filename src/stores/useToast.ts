import { Check, Info, Warning, XCircle } from '@phosphor-icons/react';
import { create } from 'zustand';

interface ToastProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  content: string;
  icon: React.ElementType;
}

type ToastObject = Record<
  ToastProps['variant'],
  (content: string, wait?: number) => void
> & {
  onClose: () => void;
  toastContent: ToastProps;
};
const DEFAULT_TOAST_TIMER = 3500;

export const useToast = create<ToastObject>()((set, get) => ({
  toastContent: {
    content: '',
    icon: Warning,
    variant: 'error' as const,
  },

  onClose: () => {
    set((state) => ({
      ...state,
      toastContent: {
        ...state.toastContent,
        content: '',
      },
    }));
  },

  info: (content, wait = DEFAULT_TOAST_TIMER) => {
    set({
      toastContent: {
        content,
        icon: Info,
        variant: 'info',
      },
    });

    setTimeout(() => get().onClose(), wait);
  },

  warning: (content, wait = DEFAULT_TOAST_TIMER) => {
    set({
      toastContent: {
        content,
        icon: Warning,
        variant: 'warning',
      },
    });

    setTimeout(() => get().onClose(), wait);
  },

  error: (content, wait = DEFAULT_TOAST_TIMER) => {
    set({
      toastContent: {
        content,
        icon: XCircle,
        variant: 'error',
      },
    });

    setTimeout(() => get().onClose(), wait);
  },

  success: (content, wait = DEFAULT_TOAST_TIMER) => {
    set({
      toastContent: {
        content,
        icon: Check,
        variant: 'success',
      },
    });

    setTimeout(() => get().onClose(), wait);
  },
}));
