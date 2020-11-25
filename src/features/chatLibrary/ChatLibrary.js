import React from 'react';
import { useSelector } from 'react-redux';
import { ChatLibraryItem } from './ChatLibraryItem';

export const ChatLibrary = () => {
  let unreadChats = [], readChats = [], selectedChatId = null;
  
  unreadChats = useSelector(state => {
    if (!state.chatLibrary.chats.length) return [];
    return state.chatLibrary.chats.filter(chat => chat.lastMessage.reaction === null)
  });

  readChats = useSelector(state => {
      if (!state.chatLibrary.chats.length) return [];
      return state.chatLibrary.chats.filter(chat => chat.lastMessage.reaction === true)
  });

  selectedChatId = useSelector(state => state.chatLibrary.selectedChat.id);

  return (
    <div className='chat-library'>
      <h2>Unread Chats</h2>
      { unreadChats.length > 0 ? 
        <div className='unread-chats'>
          
          {unreadChats.filter(chat => chat.lastMessage.reaction == null).map(chat => <ChatLibraryItem key={chat.id} chat={chat} read={false} selected={selectedChatId == chat.id} />)}
        </div> :
        <div>You have no unread chats</div>
      }
      <h2>Read Chats</h2>
      { readChats.length > 0 ?
        <div className='read-chats'>
          
          {readChats.filter(chat => chat.lastMessage.reaction !== null).map(chat => <ChatLibraryItem key={chat.id} chat={chat} read={true} selected={selectedChatId == chat.id} />)}
        </div>:
        <div>You have no read chats</div>
      }
    </div>
  );
}
