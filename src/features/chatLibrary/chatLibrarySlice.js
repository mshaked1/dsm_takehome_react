import { createSlice } from '@reduxjs/toolkit';
import { getChats, getSelectedChat, postNewMessage } from '../../api/chatAPI';

const chatLibarySlice = createSlice({
  name: 'chatLibary',
  initialState: {
    chats: [],
    selectedChat: {},
  },
  reducers: {
    loadChats: (state, action) => {
      state.chats = action.payload.chats;
    },
    selectChat: (state, action) => {
      state.selectedChat = action.payload;
      state.chats = state.chats.map(chat => chat.id === action.payload.id ?
        {
          ...chat,
          lastMessage: {
            ...chat.lastMessage,
            reaction: true
          }
        } :
      chat);
    },
  },
});

export const { loadChats, selectChat } = chatLibarySlice.actions;

export const loadChatsAsync = () => async dispatch => {
  const chats = await getChats();
  dispatch(loadChats({ chats }));
};

export const loadSelectedChatAsync = id => async dispatch => {
  const selectedChat = await getSelectedChat(id);
  dispatch(selectChat({ chat: selectedChat, id }))
}

export const postNewMessageAync = body => async dispatch => {
  const selectedChat = await postNewMessage(body);
  dispatch(loadChatsAsync());
  dispatch(loadSelectedChatAsync(body.id));
}

export default chatLibarySlice.reducer;