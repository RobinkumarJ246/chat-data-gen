import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/JoinRoom.css';
import roomStore from '../RoomStore';  // Import RoomStore

const JoinRoom = () => {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleJoinRoom = async () => {
        if (!roomCode.trim()) {
            setPasswordError('Room code cannot be empty.');
            return;
        }

        const roomData = {
            roomCode: roomCode,
            password: password
        };

        try {
            const response = await axios.post('https://chat-data-gen-server.onrender.com/api/join-room', roomData);
            if (response.status === 200) {
                roomStore.setRoomCode(roomCode);  // Use RoomStore to set the room code
                navigate(`/room/${roomCode}`);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Registration failed due to existing email
                alert('Invalid Room Code or Password');
              }
              else if (error.response && error.response.status === 404) {
                // Registration failed due to existing email
                alert('No rooms found for the Room Code');
              }
              else{console.error('Error joining room:', error);
              setPasswordError('Invalid room code or password.');}
        }
    };

    return (
        <div className="join-room-container">
            <h2>Join a Room</h2>
            <div className="input-group">
                <label htmlFor="roomCode">Room Code:</label>
                <input
                    type="text"
                    id="roomCode"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="joinPassword">Password:</label>
                <input
                    type="password"
                    id="joinPassword"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (passwordError) setPasswordError('');
                    }}
                />
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
            <button className="join-btn" onClick={handleJoinRoom}>
                Join Room
            </button>
        </div>
    );
};

export default JoinRoom;