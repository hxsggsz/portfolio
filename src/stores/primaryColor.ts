import { create } from 'zustand';

import type { PrimaryColorKeys } from '@/hooks/usePrimaryColor/types';
import { getPrimaryColor } from '@/hooks/usePrimaryColor/utils';

interface PrimaryColorStoreTypes {
  primaryColor: PrimaryColorKeys;
  changePrimaryColor: (newColor: PrimaryColorKeys) => void;
}

export const usePrimaryColorStore = create<PrimaryColorStoreTypes>()((set) => ({
  primaryColor: getPrimaryColor('@primary') as PrimaryColorKeys,

  changePrimaryColor: (newColor) => {
    localStorage.setItem('@primary', newColor);
    set({ primaryColor: newColor });
  },
}));
