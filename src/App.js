import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadChatsAsync } from './features/chatLibrary/chatLibrarySlice';
import { ChatLibrary } from './features/chatLibrary/ChatLibrary';
import { ChatBox } from './features/chatBox/ChatBox';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChatsAsync());
  })

  return (
    <div className="App">
      <ChatLibrary />
      <ChatBox />
    </div>
  );
}

export default App;
