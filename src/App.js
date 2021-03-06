import React from 'react';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID="ef818dce-ef3d-452b-bcf4-fd7ea25902bd"
      userName="badbiker"
      userSecret="123123"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
