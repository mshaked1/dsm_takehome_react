import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postNewMessageAync } from '../chatLibrary/chatLibrarySlice';

export const ChatBox = () => {
    const dispatch = useDispatch();
    const [newMessage, setNewMessage] = useState('');
    const messageRef = useRef(null);
    let selectedChat = [], id = null, user = '';

    selectedChat = useSelector(state => state.chatLibrary.selectedChat.chat || []);

    id = useSelector(state => state.chatLibrary.selectedChat.id);

    user = useSelector(state => state.chatLibrary.chats.find(chat => chat.id === state.chatLibrary.selectedChat.id).user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewMessageAync({
            message: newMessage,
            name: 'You',
            id: id
        }));
        setNewMessage('');
    }

    const scrollToBottom = () => {
        messageRef.current && messageRef.current.scrollIntoView(false, {
            behavior: 'smooth'
         });
    }
    scrollToBottom();

    // scroll to bottom when new messages come in
    useEffect(() => scrollToBottom(), [selectedChat]);

    return (
        <div className='chat-box--container'>
            {selectedChat.length > 0 ?
                <div className='chat-box'>
                    <div className='chat-box--username'>{user}</div>
                    <div className='chat-box--scroll-container'>
                        <div
                            className='messages'
                            ref={messageRef}
                        >
                            {selectedChat.length &&
                                selectedChat.map(chat => (
                                    <span className={`selected-chat-message ${chat.name === 'You' ? 'you' : 'them'}`}>
                                        {chat.message}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div className='chat-box--form'>
                        <input
                            className='chat-box--input'
                            type="text"
                            placeholder={`What do you have to say to${user ? ' ' + user : 'day'}?`}
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                        />
                        <button
                            className='chat-box--send'
                            onClick={handleSubmit}
                        >Send</button>
                    </div>
                </div> :
                <div className='chat-box--empty'>No conversation selected</div>
            }
        </div>
    );
}