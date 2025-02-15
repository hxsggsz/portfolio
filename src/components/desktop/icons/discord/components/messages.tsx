import type { RoomMessage } from '@/types/api';

import { ChatInput } from './chat-input';
import { DiscordHeader } from './discord-header';

interface MessageProps {
  roomName: string;
  messages: RoomMessage[];
}
export const Messages = (props: MessageProps) => {
  const renderMessages = () =>
    props.messages.map((message) => (
      <div
        className="flex gap-6 px-6 py-4 text-text hover:bg-discBlack/20"
        key={message.id}
      >
        <img
          className="size-10 rounded-full"
          src={message.profilePicture.url}
        />

        <div className="text-discTextActive">
          <h1 className="font-bold capitalize">{message.name}</h1>
          <p className="whitespace-break-spaces">{message.message}</p>
        </div>
      </div>
    ));

  return (
    <div className="flex w-full flex-col justify-end bg-discGrey ">
      <DiscordHeader roomName={props.roomName} />

      <div className="h-full space-y-4 overflow-y-auto scrollbar-thin scrollbar-track-discBlack/10 scrollbar-thumb-discBlack scrollbar-w-0.5">
        {renderMessages()}
      </div>

      <ChatInput roomName={props.roomName} />
    </div>
  );
};
