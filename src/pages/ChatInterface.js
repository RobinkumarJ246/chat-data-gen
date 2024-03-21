import React, { useState } from 'react';
import '../styles/ChatInterface.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const botResponses = [
    'This is a just simulated response from user2',
    'You got another response from user2',
    'I feel like a real user. Nv just joking and i am a dumb bot',
    'This is just a test message from user2',
    'This is just a testing',
    'I have received your message - By dumb Bot',
    'Try this with a real user to make use of it',
    'This is a testing portal',
    'Real chatting implementation in development',
    'Hey, I am a bot. You can soon chat with an user to make real use of this and make conversational datasets',
    'This is in testing phase, Btw i am not an AI but a dumb bot',
    'Hey human, I am dumb bot appointed here for temporary in-charge',
    'You can chat with a real user after this test phase to make real use of it',
    'Dumb bot here. BEEP BOOP!',
    'Ah! A human. This is the demo of chat portal and i am dumb bot',
    'Shroooovvvv',
    'BEEP BOOP, BOOP BEEP',
    '<BEEP> <BOOP></BOOP> </BEEP>',
    'How are you HUMAN, I am DUMB BOT',
    'I wish i had a brain like you but i am just a dumb bot',
    'What is this AI kinda thing?',
    'Do you know me? Ah, nv even i dont remember me',
    'I am just... wait what am i doing here',
    'You can call me dumb, coz thats my name',
    'The dumbest ever bot made is me',
    'I have 10 dumb awards in my stomach',
    'I have not ran out of dumb responses',
    'I have not ran out of dumb responses',
    'I am the dumbest ever person you have ever met. Person... is it okay?'
    // Add more responses as needed
  ];

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      // Add the user's message to the messages array
      const newUser1Message = { sender: 'user1', message: userInput.trim() };
      const newMessages = [...messages, newUser1Message];
      setMessages(newMessages);
  
      // Clear the input field
      setUserInput('');
  
      // Simulate a delay before adding the bot's response
      setTimeout(() => {
        // Randomly select a response from botResponses array
        const randomResponseIndex = Math.floor(Math.random() * botResponses.length);
        const randomResponse = botResponses[randomResponseIndex];
  
        // Add the bot's response to the messages array
        const newUser2Message = { sender: 'user2', message: randomResponse };
        const updatedMessages = [...newMessages, newUser2Message];
        setMessages(updatedMessages);
  
        // Here, you can send the conversation pair to your MongoDB Atlas database
        const conversationPair = [newUser1Message, newUser2Message];
        console.log('Conversation pair:', conversationPair);
        // You can use an API or a library like Mongoose to send the data to your database
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chatting Portal (Test phase)</h2>
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
