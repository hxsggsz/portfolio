import { create } from 'zustand';

interface DiscordStoreTypes {
  serverId: string;
  roomId: string;
  updateServerId: (serverId: string) => void;
  updateRoomId: (roomId: string) => void;
}

export const useDiscordStore = create<DiscordStoreTypes>()((set) => ({
  serverId: '',
  roomId: '',
  updateServerId(serverId) {
    set((state) => ({
      ...state,
      serverId,
    }));
  },

  updateRoomId(roomId) {
    set((state) => ({
      ...state,
      roomId,
    }));
  },
}));
