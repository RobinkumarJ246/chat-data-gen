import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Room.css';
import roomStore from '../RoomStore';  // Import RoomStore
import authStore from '../AuthStore';  // Import AuthStore

const Room = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [isOnlineListOpen, setIsOnlineListOpen] = useState(false);
    const [isTypingAllowed, setIsTypingAllowed] = useState(false); // State to control typing permission
    const [isSender, setIsSender] = useState(true); // State to control sender/replier role

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get(`https://chat-data-gen-server.onrender.com/api/check-auth/${code}`, {
                    headers: {
                        Authorization: roomStore.getPassword() // Use the password from RoomStore
                    }
                });
                if (response.status !== 200) {
                    navigate('/join-room');
                } else {
                    setIsLoading(false);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.error('Error accessing the room:', error);
                    setAuthError('(401: UNAUTHORIZED)\nYou are not authorized to access this room');
                    setIsLoading(false);
                } else if (error.response && error.response.status === 404) {
                    console.error('Error accessing the room:', error);
                    setAuthError('ERROR 404');
                    setIsLoading(false);
                } else {
                    console.error('Error checking authentication:', error);
                    setAuthError('Error checking room authenticity. Please try again.');
                    setIsLoading(false);
                }
            }
        };

        const fetchOnlineUsers = async () => {
            try {
                const response = await axios.get(`https://chat-data-gen-server.onrender.com/api/online-users/${code}`);
                setOnlineUsers(response.data.onlineUsers);
            } catch (error) {
                console.error('Error fetching online users:', error);
            }
        };

        checkAuthentication();
        fetchOnlineUsers();

        // Listen for changes in online users
        const interval = setInterval(fetchOnlineUsers, 10000); // Refresh every 10 seconds

        return () => clearInterval(interval); // Cleanup
    }, [code, navigate]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            const newUserMessage = { sender: isSender ? authStore.getEmail() : onlineUsers.find(user => user !== authStore.getEmail()), message: userInput.trim() };
            const newMessages = [...messages, newUserMessage];
            setMessages(newMessages);
            setUserInput('');

            // Send message to server
            try {
                const response = await axios.post(`https://chat-data-gen-server.onrender.com/api/send-message`, {
                    roomCode: code,
                    sender: isSender ? authStore.getEmail() : onlineUsers.find(user => user !== authStore.getEmail()),
                    message: userInput.trim(),
                    reply: isSender ? null : userInput.trim(),
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error sending message:', error);
            }

            setIsTypingAllowed(!isSender); // Toggle typing permission
            setIsSender(!isSender); // Toggle sender/replier role
        }
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const toggleOnlineList = () => {
        setIsOnlineListOpen(!isOnlineListOpen);
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

    if (isLoading) {
        return <p>Please wait while we check your room authenticity...</p>;
    }

    if (authError) {
        return <p>{authError}</p>;
    }

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Chatting Portal (Room Code: {roomStore.getRoomCode()})</h2>
                <div className="header-right">
                    <div className="online-users-dropdown">
                        <button onClick={toggleOnlineList} className="online-users-btn">Online: {onlineUsers.length}</button>
                        {isOnlineListOpen && (
                            <div className="online-users-list">
                                {onlineUsers.map((user, index) => (
                                    <div key={index} className="online-user-item">
                                        {user === authStore.getEmail() ? `${user} (You)` : user}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="slider-container">
                        <span>Send</span>
                        <label className="switch">
                            <input type="checkbox" checked={isSender} onChange={() => {}} disabled={!isTypingAllowed} />
                            <span className="slider round" onClick={() => {setIsSender(!isSender); setIsTypingAllowed(!isTypingAllowed)}}></span>
                        </label>
                        <span>Reply</span>
                    </div>
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
            </div>
            <div className="chat-body">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === authStore.getEmail() ? 'user1' : 'user2'}`}>
                        <span className="sender">{msg.sender}</span>
                        <span className="message-text">{msg.message}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={isTypingAllowed ? (isSender ? "Type your message..." : "Waiting for response...") : "Waiting for response..."}
                        disabled={!isTypingAllowed}
                        value={userInput}
                        onChange={handleInputChange}
                    />
                    <button type="submit" disabled={!isTypingAllowed}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Room;