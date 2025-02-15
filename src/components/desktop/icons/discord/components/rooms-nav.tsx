import { useEffect } from 'react';

import { useTranslations } from '@/i18n/utils';
import { useDiscordStore } from '@/stores/discord';
import type { ServerRoom } from '@/types/api';
import { cn } from '@/utils/cn';

interface RoomNavProps {
  rooms: ServerRoom[];
}

export const RoomsNav = (props: RoomNavProps) => {
  const t = useTranslations();

  const { roomId, updateRoomId } = useDiscordStore();

  const renderRoomNames = () =>
    props.rooms.map((room) => {
      const isRoomActive = room.id === roomId;
      return (
        <button key={room.id} onClick={() => updateRoomId(room.id)}>
          <p
            className={cn(
              'rounded-[4px] transition-all text-start capitalize select-none px-2 cursor-pointer py-0.5',
              isRoomActive
                ? 'bg-discTextActive/80 text-discDarkGrey'
                : 'hover:bg-discTextActive/5'
            )}
          >
            # {room.roomName}
          </p>
        </button>
      );
    });

  useEffect(() => {
    const findFirstRoom = props.rooms.at(0);

    if (findFirstRoom) {
      updateRoomId(findFirstRoom.id);
    }
  }, []);
  return (
    <div className="max-w-60 whitespace-nowrap bg-discDarkGrey p-2 text-discText">
      <h1>{t('disc.rooms.title')}</h1>

      <div className="grid gap-1">{renderRoomNames()}</div>
    </div>
  );
};
