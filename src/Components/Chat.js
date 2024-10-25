import React from "react";
const Chat = ({ chat, onSelectChat }) => {
    const lastMessage = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : "No messages yet";

    return (
        <div className="chat" onClick={() => onSelectChat(chat)}>
            <h3>{chat.name}</h3>
             <p>{lastMessage}</p> 
        </div>
    );
};

export default Chat;
