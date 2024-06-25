import { useMemo, useState } from 'react';

import { Languages } from '@/components/desktop/components/windows/fileExplorer/components/languages';
import { Window } from '@/components/desktop/components/windows/window';
import { useTranslations } from '@/i18n/utils';
import type { DefaultWindowProps } from '@/types/windows';

export const FileExplorer = (props: DefaultWindowProps) => {
  const [activeItem, setActiveItem] = useState('');

  const t = useTranslations();

  const fileItems = [{ label: 'linguagens', component: <Languages /> }];

  const findActiveComponent = useMemo(() => {
    const activeComponent = fileItems.find((item) => item.label === activeItem);
    return activeComponent && activeComponent.component;
  }, [activeItem]);

  const renderExplorerNav = () =>
    fileItems.map((item) => (
      <li className="whitespace-nowrap pr-2">
        <button onClick={() => setActiveItem(item.label)}>{item.label}</button>
      </li>
    ));

  return (
    <Window id={props.id} name={t('File Explorer')}>
      <div className="flex gap-2 text-text">
        <ul className="h-screen border-r border-white/10">
          {renderExplorerNav()}
        </ul>

        <div className="w-3/4">{findActiveComponent}</div>
      </div>
    </Window>
  );
};
