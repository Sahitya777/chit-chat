import React from 'react';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="ef818dce-ef3d-452b-bcf4-fd7ea25902bd"
      userName="Sahitya Nijhawan"
      userSecret="12345"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
