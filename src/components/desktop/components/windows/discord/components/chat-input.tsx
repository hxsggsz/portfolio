import { Gif, Gift, PlusCircle, Smiley, Sticker } from '@phosphor-icons/react';

import { DiscordChatIcon } from '@/components/desktop/components/discord-chat-icon';
import { useTranslations } from '@/i18n/utils';

interface ChatInputProps {
  roomName: string;
}
export const ChatInput = (props: ChatInputProps) => {
  const t = useTranslations();

  return (
    <div className="flex w-full justify-between gap-2">
      <label className="my-6 flex w-full cursor-not-allowed gap-2 rounded-sm bg-[#373a3f] px-3 py-2">
        <PlusCircle className="fill-discTextActive" size={32} weight="fill" />
        <input
          disabled
          className="w-full cursor-not-allowed bg-inherit text-discText outline-none"
          placeholder={`${t('disc.placeholder')} #${props.roomName}`}
        />
        <div className="flex">
          <Gift className="fill-discTextActive" size={32} weight="fill" />
          <Gif className="fill-discTextActive" size={32} weight="fill" />
          <Sticker className="fill-discTextActive" size={32} weight="fill" />
          <Smiley className="fill-discTextActive" size={32} weight="fill" />
        </div>
      </label>

      <div className="mt-6 size-12 cursor-not-allowed rounded-sm bg-[#373a3f] fill-discTextActive p-2">
        <DiscordChatIcon />
      </div>
    </div>
  );
};
