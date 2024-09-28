import { useEffect, useMemo } from 'react';

import { Window } from '@/components/desktop/components/windows/window';
import { useDiscordStore } from '@/stores/discord';
import type { DiscordResponse } from '@/types/api';
import type { DefaultWindowProps } from '@/types/windows';

import { RoomsNav } from './components/rooms-nav';
import { ServerNav } from './components/server-nav';

interface FileExplorerProps extends DefaultWindowProps {
  discord: DiscordResponse[];
}

export const Discord = (props: FileExplorerProps) => {
  const { serverId, updateServerId } = useDiscordStore();

  const renderRooms = useMemo(() => {
    const foundDiscordServer = props.discord.find(
      (disc) => disc.id === serverId
    );

    return (
      foundDiscordServer && <RoomsNav rooms={foundDiscordServer.serverRoom} />
    );
  }, [props.discord, serverId]);

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
      <div className="w-[78%] bg-discGrey" />
    </Window>
  );
};
