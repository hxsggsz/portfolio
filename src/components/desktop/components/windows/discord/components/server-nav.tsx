import { useDiscordStore } from '@/stores/discord';
import type { DiscordResponse } from '@/types/api';
import { cn } from '@/utils/cn';

interface ServerNavProps {
  servers: DiscordResponse[];
}

export const ServerNav = (props: ServerNavProps) => {
  const { serverId, updateServerId } = useDiscordStore();

  const renderServers = () =>
    props.servers.map((server) => {
      const isActive = server.id === serverId;

      return (
        <button
          key={server.id}
          className="relative flex h-max items-center"
          onClick={() => updateServerId(server.id)}
        >
          <div
            className={cn(
              'absolute w-1 rounded-full bg-white',
              isActive ? 'h-full' : 'h-4'
            )}
          />
          <img src={server.serverImg.url} className="ml-2 size-12 rounded-xl" />
        </button>
      );
    });

  return (
    <div className="w-[72px] bg-discBlack p-2 pl-0">{renderServers()}</div>
  );
};
