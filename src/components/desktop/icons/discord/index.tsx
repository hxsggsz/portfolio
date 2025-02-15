import { useEffect, useMemo, useRef } from 'react';

import DiscordImg from '@/assets/images/discord.png';
import { Window } from '@/components/desktop/windows/window/';
import { useDiscordStore } from '@/stores/discord';
import type { DiscordResponse } from '@/types/api';
import type { UseImperativeWindowHandler } from '@/types/windows';

import { DesktopItems } from '../desktop-icon';
import { Messages } from './components/messages';
import { RoomsNav } from './components/rooms-nav';
import { ServerNav } from './components/server-nav';

interface FileExplorerProps {
  discord: DiscordResponse[];
}

export const Discord = (props: FileExplorerProps) => {
  const windowRef = useRef<UseImperativeWindowHandler>(null);

  const { serverId, roomId, updateServerId } = useDiscordStore();

  const renderRooms = useMemo(() => {
    const foundDiscordServer = props.discord.find(
      (disc) => disc.id === serverId
    );

    return (
      foundDiscordServer && <RoomsNav rooms={foundDiscordServer.serverRoom} />
    );
  }, [props.discord, serverId]);

  const renderMessages = useMemo(() => {
    const findDiscordServer = props.discord.find(
      (disc) => disc.id === serverId
    );
    if (!findDiscordServer) return null;

    const findServerMessages = findDiscordServer.serverRoom.find(
      (room) => room.id === roomId
    );

    if (!findServerMessages) return null;

    return (
      <Messages
        roomName={findServerMessages.roomName}
        messages={findServerMessages.roomMessage}
      />
    );
  }, [serverId, roomId]);

  useEffect(() => {
    const firstDiscordServer = props.discord.at(0);

    if (firstDiscordServer) {
      updateServerId(firstDiscordServer.id);
    }
  }, []);

  return (
    <>
      <DesktopItems
        name="Discord"
        icon={DiscordImg.src}
        onDoubleClick={() =>
          windowRef.current?.openWindow({
            name: 'Discord',
            image: DiscordImg.src,
          })
        }
      />

      <Window name="Discord" ref={windowRef}>
        <ServerNav servers={props.discord} />
        {renderRooms}
        {renderMessages}
      </Window>
    </>
  );
};
