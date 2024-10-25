import React from 'react';
import Chat from './Chat';

function Sidebar  ({ chats, onSelectChat }) {
    return (
        <div className="sidebar">
        
            {chats.map(chat => (
                <Chat key={chat.id} chat={chat} onSelectChat={onSelectChat} /> 
        //       <div key={chat.id} className="chat-item" onClick={() => onSelectChat(chat)}>
        //          <img src="https://photo.jpg" alt={`${chat.name}'`} className="chat-image" />


                 
        //    <div className="chat-name">{chat.name}</div>
        //    </div>
            ))}
        </div>
    );
};

export default Sidebar;
