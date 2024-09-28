import { useState } from 'react';

import { cn } from '@/utils/cn';

interface RoomNavProps {
  roomName: string;
}

export const RoomsNav = (props: RoomNavProps) => {
  const [isActive] = useState(true);

  return (
    <div className="w-2/12 whitespace-nowrap bg-discDarkGrey p-2 text-discText">
      <h1>Canais de texto</h1>

      <div className="space-y-1">
        <p
          className={cn(
            'rounded-sm px-2 cursor-pointer py-0.5',
            isActive
              ? 'bg-discTextActive/80 text-discDarkGrey'
              : 'hover:bg-discTextActive/5'
          )}
        >
          # {props.roomName}
        </p>
      </div>
    </div>
  );
};
