import { useEffect, useMemo } from 'react';

import { Window } from '@/components/desktop/windows/window/';
import { useDiscordStore } from '@/stores/discord';
import type { DiscordResponse } from '@/types/api';
import type { DefaultWindowProps } from '@/types/windows';

import { Messages } from './components/messages';
import { RoomsNav } from './components/rooms-nav';
import { ServerNav } from './components/server-nav';

interface FileExplorerProps extends DefaultWindowProps {
  discord: DiscordResponse[];
}

export const Discord = (props: FileExplorerProps) => {
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
    <Window id={props.id} name="Discord">
      <ServerNav servers={props.discord} />
      {renderRooms}
      {renderMessages}
    </Window>
  );
};
