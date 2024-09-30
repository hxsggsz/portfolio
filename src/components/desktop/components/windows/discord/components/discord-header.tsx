interface DiscordHeaderProps {
  roomName: string;
}

export const DiscordHeader = (props: DiscordHeaderProps) => {
  return (
    <header className="border-b border-discBlack bg-discGrey px-3 py-2 capitalize text-discTextActive">
      <h1># {props.roomName}</h1>
    </header>
  );
};
