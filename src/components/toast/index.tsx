import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

import { useToast } from '@/stores/useToast';

const toastVariants = cva(
  'fixed right-0 top-0 z-40 m-4 flex w-1/3 items-center justify-start rounded-md border border-[#e0def4] p-2 text-[#e0def4]',
  {
    variants: {
      variant: {
        info: 'bg-foam hover:bg-foam/90',
        success: 'bg-pine hover:bg-pine/90',
        warning: 'bg-gold hover:bg-gold/90',
        error: 'bg-love hover:bg-love/90',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export const Toast = () => {
  const { toastContent, onClose } = useToast();

  return (
    <AnimatePresence>
      {toastContent.content && (
        <motion.button
          key="toast"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className={toastVariants({ variant: toastContent.variant })}
          onClick={onClose}
        >
          <div className="flex items-center">
            <toastContent.icon
              weight="bold"
              className="mr-2 rounded p-1 text-5xl text-[#e0def4]"
            />
            <p>{toastContent.content}</p>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
