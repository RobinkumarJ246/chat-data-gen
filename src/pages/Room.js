import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Room.css';
import roomStore from '../RoomStore';  // Import RoomStore

const Room = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get(`https://chat-data-gen-server.onrender.com/api/check-auth/${code}`);
                if (response.status !== 200) {
                    navigate('/join-room');
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
                navigate('/join-room');
            }
        };

        checkAuthentication();
    }, [code, navigate]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            const newUser1Message = { sender: 'user1', message: userInput.trim() };
            const newMessages = [...messages, newUser1Message];
            setMessages(newMessages);
            setUserInput('');
        }
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        switch (option) {
            case 'changeRoomName':
                // Implement the logic to change the room name
                break;
            case 'copyRoomCode':
                navigator.clipboard.writeText(roomStore.getRoomCode());
                alert('Room code copied to clipboard!');
                break;
            case 'downloadData':
                // Implement the logic to download chat data
                break;
            case 'deleteRoom':
                // Implement the logic to delete the room
                break;
            default:
                break;
        }
        setShowOptions(false);  // Hide the options dropdown after clicking an option
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Chatting Portal (Room Code: {roomStore.getRoomCode()})</h2>
                <div className="options-dropdown">
                    <button onClick={toggleOptions} className="options-btn">Options</button>
                    {showOptions && (
                        <div className="options-content">
                            <button onClick={() => handleOptionClick('changeRoomName')}>Change Room Name</button>
                            <button onClick={() => handleOptionClick('copyRoomCode')}>Copy Room Code</button>
                            <button onClick={() => handleOptionClick('downloadData')}>Download Chat Data</button>
                            <button onClick={() => handleOptionClick('deleteRoom')}>Delete Room</button>
                        </div>
                    )}
                </div>
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

export default Room;