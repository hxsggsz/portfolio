import { useDiscordStore } from '@/stores/discord';
import type { ServerRoom } from '@/types/api';
import { cn } from '@/utils/cn';

interface RoomNavProps {
  rooms: ServerRoom[];
}

export const RoomsNav = (props: RoomNavProps) => {
  const { roomId, updateRoomId } = useDiscordStore();

  const renderRoomNames = () =>
    props.rooms.map((room) => {
      const isRoomActive = room.id === roomId;
      return (
        <button onClick={() => updateRoomId(room.id)}>
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

  return (
    <div className="w-2/12 max-w-60 whitespace-nowrap bg-discDarkGrey p-2 text-discText">
      <h1>Canais de texto</h1>

      <div className="flex flex-col gap-1">{renderRoomNames()}</div>
    </div>
  );
};
