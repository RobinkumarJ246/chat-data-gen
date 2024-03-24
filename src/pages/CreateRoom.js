import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateRoom.css';
import roomStore from '../RoomStore';  // Import RoomStore

const CreateRoom = () => {
    const navigate = useNavigate();
    const [roomName, setRoomName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const generateRoomCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const validatePassword = (pass) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,8}$/;
        return regex.test(pass);
    };

    const validateRoomName = (name) => {
        const regex = /^[a-zA-Z]{4,12}$/;
        return regex.test(name);
    };

    const handleCreateRoom = async () => {
        if (!validatePassword(password)) {
            setPasswordError('Password must be 4 to 8 characters long and include at least one uppercase letter, one number, and one symbol.');
            return;
        }

        if (!validateRoomName(roomName)) {
            setPasswordError('Room name must be between 4 to 12 characters and contain only alphabets.');
            return;
        }

        const code = generateRoomCode();
        roomStore.setRoomCode(code);  // Use RoomStore to set the room code

        const roomData = {
            roomCode: code,
            roomName: roomName,
            password: password
        };

        try {
            const response = await axios.post('https://chat-data-gen-server.onrender.com/api/save-room', roomData);
            if (response.status === 200) {
                console.log(`Room Code: ${code}`);
                navigate(`/room/${code}`);  // Navigate to the created room page
            }
        } catch (error) {
            console.error('Error creating room:', error);
        }
    };

    return (
        <div className="create-room-container">
            <h2>Create a Room</h2>
            <div className="input-group">
                <label htmlFor="roomName">Room Name:</label>
                <input
                    type="text"
                    id="roomName"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Set a password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (passwordError) setPasswordError('');
                    }}
                />
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
            <button className="create-btn" onClick={handleCreateRoom}>
                Create Room
            </button>
        </div>
    );
};

export default CreateRoom;