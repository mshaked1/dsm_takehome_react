import React from 'react';
import { useDispatch } from 'react-redux';
import { loadSelectedChatAsync } from './chatLibrarySlice';

export const ChatLibraryItem = ({ chat, read, selected }) => {
    const dispatch = useDispatch();

    return (
        <div
            className={`chat-library-item ${read === true ? 'read' : 'unread'} ${selected ? 'selected' : ''}`}
            onClick={() => {
                return dispatch(loadSelectedChatAsync(chat.id))}}
        >
            <div className='chat-library-item--name'>{chat.user}</div>
            <div className='chat-library-item--message'>{chat.lastMessage.message}</div>
        </div>
    );
}