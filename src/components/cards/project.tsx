import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Drawer } from 'vaul';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import useSizeScreen from '@/hooks/useSizeScreen';
import { getLangFromUrl, useTranslations } from '@/i18n/utils';
import { useWindowManagerStore } from '@/stores/windowManager';
import type { ProjectsResponse } from '@/types/api';
import { cn } from '@/utils/cn';

interface ProjectCardProps extends ProjectsResponse {
  windowId: string;
}

const MOBILE_BREAKPOINT = 768;

export const ProjectCard = (props: ProjectCardProps) => {
  const [cardIdOpen, setCardIdOpen] = useState('');

  const t = useTranslations();
  const lang = getLangFromUrl();

  const { findWindow } = useWindowManagerStore();
  const isWindowFullScreen = findWindow(props.windowId)?.isFullscreen;

  const { width } = useSizeScreen();

  const card = usePrimaryColor('border');
  const button = usePrimaryColor('bg', 'active');

  function openCard(cardId: string) {
    setCardIdOpen(cardId);
  }

  function clearCard() {
    setCardIdOpen('');
  }

  const renderDrawerCard = () => (
    <Drawer.Root
      open={Boolean(cardIdOpen)}
      onOpenChange={(open) => setCardIdOpen((prev) => (!open ? '' : prev))}
    >
      <Drawer.Overlay
        onClick={clearCard}
        className="fixed inset-0 bg-black/40"
      />
      <Drawer.Content
        className={cn(
          'fixed cursor-grab inset-x-0 bottom-0 mb-10 block outline-none bg-base lg:hidden',
          card.className
        )}
      >
        <div className="mx-auto w-full max-w-md p-2 py-4">
          <div className="flex flex-col space-y-4">
            <div className="relative mb-2 h-48 w-full overflow-hidden rounded-lg">
              <img
                src={props.projectImage.url}
                alt="Pomodoro Project Screenshot"
                className="pointer-events-none select-none object-cover"
              />
            </div>

            <Drawer.Title className="text-2xl font-bold">
              {props.name}
            </Drawer.Title>

            <Drawer.Description className="text-sm">
              {props.description}
            </Drawer.Description>

            <p className="mb-2 text-sm text-text/60">
              {new Date(props.startAt).toLocaleDateString(lang)}{' '}
              {t('projects.until')}{' '}
              {new Date(props.endAt).toLocaleDateString(lang)}
            </p>

            {/* Project Actions */}
            <div className="flex gap-2">
              {props.deployLink && (
                <a
                  target="_blank"
                  href={props.deployLink}
                  className={cn('p-2 rounded-md', button.className)}
                >
                  Deploy
                </a>
              )}

              {props.githubLink && (
                <a
                  target="_blank"
                  href={props.githubLink}
                  className={cn('p-2 rounded-md', button.className)}
                >
                  Github
                </a>
              )}
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
  const renderOpenCard = () => (
    <AnimatePresence>
      <button
        onClick={clearCard}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm "
      />

      <motion.button
        key={cardIdOpen}
        onClick={clearCard}
        layoutId={cardIdOpen}
        className={cn(
          'lg:flex hidden items-center gap-2 rounded-md cursor-pointer p-4 flex-col w-[90%]  md:items-stretch md:flex-row absolute bg-base md:h-min left-1/2 top-1/2 !-translate-x-1/2 !-translate-y-1/2',
          card.className
        )}
      >
        <img
          src={props.projectImage.url}
          alt={`image of the ${props.name} project`}
          className={cn(
            'w-full rounded-md object-cover h-40 sm:h-56 md:size-72',
            button.className
          )}
        />

        <div className="flex flex-col justify-between text-start">
          <p className={cn('whitespace-nowrap font-bold capitalize text-2xl')}>
            {props.name}
          </p>

          <p className="line-clamp-4 size-full w-full text-lg">
            {props.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex justify-start gap-2">
              {props.deployLink && (
                <a
                  target="_blank"
                  href={props.deployLink}
                  className={cn('p-2 rounded-md', button.className)}
                >
                  Deploy
                </a>
              )}

              {props.githubLink && (
                <a
                  target="_blank"
                  href={props.githubLink}
                  className={cn('p-2 rounded-md', button.className)}
                >
                  Github
                </a>
              )}
            </div>

            <p className="mb-2 text-sm text-text/60">
              {new Date(props.startAt).toLocaleDateString(lang)}{' '}
              {t('projects.until')}{' '}
              {new Date(props.endAt).toLocaleDateString(lang)}
            </p>
          </div>
        </div>
      </motion.button>
    </AnimatePresence>
  );

  return (
    <>
      <motion.button
        layoutId={props.id}
        onClick={() => openCard(props.id)}
        className={cn(
          'items-start gap-2 md:h-56 rounded-md cursor-pointer p-4 w-full 2xl:w-fit flex flex-col md:items-stretch md:flex-row',
          !isWindowFullScreen && '2xl:w-full',
          card.className
        )}
      >
        <img
          src={props.projectImage.url}
          alt={`image of the ${props.name} project`}
          className={cn('w-full rounded-md md:size-48', button.className)}
        />

        <div className="flex flex-col justify-between text-start">
          <p className="whitespace-nowrap font-bold capitalize">{props.name}</p>

          <p
            className={cn(
              'line-clamp-4 2xl:w-[342px] text-sm',
              !isWindowFullScreen && 'w-full'
            )}
          >
            {props.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex justify-start gap-2">
              {props.deployLink && (
                <a
                  target="_blank"
                  href={props.deployLink}
                  className={cn('p-2 rounded-md', button.className)}
                >
                  Deploy
                </a>
              )}

              {props.githubLink && (
                <a
                  target="_blank"
                  href={props.githubLink}
                  className={cn('p-2 rounded-md', button.className)}
                >
                  Github
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.button>

      {cardIdOpen &&
        (width >= MOBILE_BREAKPOINT ? renderOpenCard() : renderDrawerCard())}
    </>
  );
};
