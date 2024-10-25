/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from "react";
import SearchBar from "./Components/searchbar";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Message from "./Components/Message";
import "./styles.css";
import Picture from "./Components/images/Picture.jpg";
import Pic from "./Components/images/Pic.jpg";
import Photo from "./Components/images/photo.png";
//import Microphonesolid from "./Components/images/microphone-solid.svg"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (query) => {
  //   console.log("Searching for:", query);
  // };

  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Chat 1",
      image: "https://Picture.jpg",
      messages: [
        { text: "Hii..", sender: "Chat 1" },
        { text: "Hello..", sender: "You" },
      ],
    },
    {
      id: 2,
      name: "Chat 2",
      image: "https://Pic.jpg",
      messages: [
        { text: "What are you doing?", sender: "Chat 2" },
        { text: "Nothing..", sender: "You" },
      ],
    },
    {
      id: 3,
      name: "Chat 3",
      image: "https://photo.jpg",
      messages: [
        { text: "How are you?", sender: "Chat 3" },
        { text: "I'm good!", sender: "You" },
      ],
    },

    {
      id: 4,
      name: "Chat 4",
      image: "https://photo.jpg",
      messages: [
        { text: "Tommorow is holiday?", sender: "Chat 3" },
        { text: "No buddy...", sender: "You" },
      ],
    },

    {
      id: 5,
      name: "Chat 5",
      image: "https://photo.jpg",
      messages: [
        { text: "How are you?", sender: "Chat 3" },
        { text: "I'm good!", sender: "You" },
      ],
    },
    
    {
      id: 6,
      name: "Chat 6",
      image: "https://photo.jpg",
      messages: [
        { text: "How are you?", sender: "Chat 3" },
        { text: "I'm good!", sender: "You" },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() && selectedChat) {
      const updatedChats = chats.map((chat) => {
        if (chat.id === selectedChat.id) {
          return {
            ...chat,

            Messages: [...chat.messages, { text: input, sender: "You" }],
          };
        }
        return chat;
      });

      setChats(updatedChats);
      setSelectedChat((prevChat) => ({
        prevChat,
        messages: [...prevChat.messages, { text: input, sender: "You" }],
      }));
      setInput("");
    }
  };

  return (
    <div className="app">
      <Header />
      
      <div className="searchbar">
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>

      <div className="container">
        <Sidebar chats={chats} onSelectChat={setSelectedChat} />
        <div className="chat-page">
          <div className="messages">
            {selectedChat &&
              selectedChat.messages.map((msg, index) => (
                <Message
                  key={index}
                  message={msg.text}
                  isSent={msg.sender === "You"}
                />
              ))}
          </div>

          <div className="message-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />

            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
