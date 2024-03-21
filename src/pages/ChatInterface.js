import React, { useState } from 'react';
import '../styles/ChatInterface.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      // Add the user's message to the messages array
      setMessages([...messages, { sender: 'user1', message: userInput.trim() }]);

      // Clear the input field
      setUserInput('');

      // Simulate a delay before adding the bot's response
      setTimeout(() => {
        // Add the bot's response to the messages array
        setMessages([
          ...messages,
          { sender: 'user1', message: userInput.trim() },
          { sender: 'user2', message: 'This is a simulated response from user2' },
        ]);

        // Here, you can send the conversation pair to your MongoDB Atlas database
        const conversationPair = [
          { sender: 'user1', message: userInput.trim() },
          { sender: 'user2', message: 'This is a simulated response from user2' },
        ];
        console.log('Conversation pair:', conversationPair);
        // You can use an API or a library like Mongoose to send the data to your database
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chatting Portal</h2>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user1' ? 'user1' : 'user2'}`}>
            <span className="sender">{msg.sender}</span>
            <span className="message-text">{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;