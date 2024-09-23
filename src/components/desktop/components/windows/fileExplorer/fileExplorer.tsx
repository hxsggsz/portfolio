import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { Languages } from '@/components/desktop/components/windows/fileExplorer/components/languages';
import { Window } from '@/components/desktop/components/windows/window';
import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useTranslations } from '@/i18n/utils';
import type {
  AboutMeResponse,
  LanguageResponse,
  ProjectsResponse,
} from '@/types/api';
import type { DefaultWindowProps } from '@/types/windows';
import { cn } from '@/utils/cn';

import { AboutMe } from './components/about-me';
import { Projects } from './components/projects';

interface FileExplorerProps extends DefaultWindowProps {
  aboutMe: AboutMeResponse;
  language: LanguageResponse[];
  projects: ProjectsResponse[];
}

export const FileExplorer = (props: FileExplorerProps) => {
  const t = useTranslations();

  const [activeItem, setActiveItem] = useState(t('abt-me.nav'));

  const activeBg = usePrimaryColor('bg');

  const fileItems = [
    {
      label: t('abt-me.nav'),
      component: <AboutMe aboutMe={props.aboutMe} />,
    },
    {
      label: t('languages'),
      component: <Languages languages={props.language} />,
    },
    {
      label: t('projects'),
      component: <Projects projects={props.projects} windowId={props.id} />,
    },
  ];

  const findActiveComponent = useMemo(() => {
    const activeComponent = fileItems.find((item) => item.label === activeItem);
    return activeComponent && activeComponent.component;
  }, [activeItem]);

  const renderExplorerNav = () =>
    fileItems.map((item) => {
      const activeLabelItem = activeItem === item.label;
      return (
        <li
          key={item.label}
          className={cn(
            'relative whitespace-nowrap p-1 mr-1',
            activeLabelItem && 'font-bold'
          )}
        >
          {activeLabelItem && (
            <motion.div
              layoutId="settings-nav"
              className={cn(
                'absolute font-bold inset-0 -z-10 rounded-md',
                activeBg.className
              )}
            />
          )}
          <button onClick={() => setActiveItem(item.label)}>
            {item.label}
          </button>
        </li>
      );
    });

  return (
    <Window id={props.id} name={t('File Explorer')}>
      <div className="flex h-full gap-2 text-text">
        <ul className="border-r-2 border-white/10">{renderExplorerNav()}</ul>

        <div>{findActiveComponent}</div>
      </div>
    </Window>
  );
};
