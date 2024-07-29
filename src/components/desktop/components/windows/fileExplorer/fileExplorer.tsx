import { useMemo, useState } from 'react';

import { Languages } from '@/components/desktop/components/windows/fileExplorer/components/languages';
import { Window } from '@/components/desktop/components/windows/window';
import { useTranslations } from '@/i18n/utils';
import type { LanguageResponse } from '@/types/api';
import type { DefaultWindowProps } from '@/types/windows';

interface FileExplorerProps extends DefaultWindowProps {
  languages: LanguageResponse[];
}

export const FileExplorer = (props: FileExplorerProps) => {
  const t = useTranslations();

  const [activeItem, setActiveItem] = useState(t('languages'));

  const fileItems = [
    {
      label: t('languages'),
      component: <Languages languages={props.languages} />,
    },
  ];

  const findActiveComponent = useMemo(() => {
    const activeComponent = fileItems.find((item) => item.label === activeItem);
    return activeComponent && activeComponent.component;
  }, [activeItem]);

  const renderExplorerNav = () =>
    fileItems.map((item) => (
      <li key={item.label} className="whitespace-nowrap pr-2">
        <button onClick={() => setActiveItem(item.label)}>{item.label}</button>
      </li>
    ));

  return (
    <Window id={props.id} name={t('File Explorer')}>
      <div className="flex min-h-max gap-2 text-text">
        <ul className="border-r border-white/10">{renderExplorerNav()}</ul>

        <div>{findActiveComponent}</div>
      </div>
    </Window>
  );
};
