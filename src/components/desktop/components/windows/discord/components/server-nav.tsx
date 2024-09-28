import { useDiscordStore } from '@/stores/discord';
import { cn } from '@/utils/cn';

interface ServerNavProps {
  serverId: string;
  img: string;
}

export const ServerNav = (props: ServerNavProps) => {
  const { serverId, updateServerId } = useDiscordStore();

  const isActive = props.serverId === serverId;

  return (
    <div className="bg-discBlack p-2 pl-0">
      <button
        className="relative flex h-max items-center"
        onClick={() => updateServerId(props.serverId)}
      >
        <div
          className={cn(
            'absolute w-1 rounded-full bg-white',
            isActive ? 'h-full' : 'h-4'
          )}
        />
        <img src={props.img} className="ml-2 size-14 rounded-xl" />
      </button>
    </div>
  );
};
