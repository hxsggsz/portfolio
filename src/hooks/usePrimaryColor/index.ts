import { useEffect, useState } from 'react';

import { usePrimaryColorStore } from '@/stores/primaryColor';

import { colors } from './constants';
import type { Primary, PrimaryColorKeys } from './types';

export function usePrimaryColor(...primary: Primary[]) {
  const [className, setClassName] = useState('');

  const primaryColor = usePrimaryColorStore();

  function changePrimaryColor(newColor: PrimaryColorKeys) {
    primaryColor.changePrimaryColor(newColor);
  }

  useEffect(() => {
    primary.forEach((indicator) => {
      setClassName((prev) =>
        prev.concat(
          ` transition-colors ${
            colors[indicator][primaryColor.primaryColor || 'love']
          }`
        )
      );
    });
  }, [primaryColor.primaryColor]);

  return { className, changePrimaryColor };
}
