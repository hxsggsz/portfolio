import { nanoid } from 'nanoid';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { colors } from '@/hooks/usePrimaryColor/constants';
import type { PrimaryColorKeys } from '@/hooks/usePrimaryColor/types';
import { useThemeMode } from '@/hooks/useThemeMode';
import { cn } from '@/utils/cn';

import { Window } from './window';

interface SettingsProps {
  id: string;
  name: string;
}

const primaryColorsOptions: PrimaryColorKeys[] = [
  'love',
  'gold',
  'rose',
  'pine',
  'foam',
  'iris',
];

export const Settings = (props: SettingsProps) => {
  const { setTheme } = useThemeMode();

  const { className, changePrimaryColor } = usePrimaryColor('border');

  const renderPrimaryColors = () =>
    primaryColorsOptions.map((color) => (
      <button
        key={nanoid()}
        onClick={() => changePrimaryColor(color)}
        className={cn(
          'rounded-full transition-colors bg-rose p-8',
          className,
          colors.bg[color]
        )}
      />
    ));

  return (
    <Window name={props.name} id={props.id}>
      <div className="grid place-items-center">
        <h1 className="mb-2 text-lg font-semibold text-text">
          Select your favorite theme
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme('light')}
            className={cn(
              'rounded-full border border-love transition-colors bg-[#faf4ed] p-12',
              className
            )}
          />

          <button
            onClick={() => setTheme('dark')}
            className={cn(
              'rounded-full border border-love bg-[#232136] transition-colors p-12',
              className
            )}
          />
        </div>

        <h1 className="mb-2 text-lg font-semibold text-text">
          Select the main color
        </h1>

        <div className="flex gap-2">{renderPrimaryColors()}</div>
      </div>
    </Window>
  );
};
