import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Rooms.css';

const Rooms = () => {
  const navigate = useNavigate();
  const navigateToDumbBot = () => {
    navigate('/chat-interface');
  };

  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const text = "How do you want to get started?";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setHeaderText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rooms-container">
      <div className="rooms-header">
        <h1>{headerText}</h1>
      </div>
      <div className="room-options">
        <Link to="/create-room" className="option-box">
          <button className="option-btn">Create a Room</button>
        </Link>
        <Link to="/join-room" className="option-box">
          <button className="option-btn">Join a Room</button>
        </Link>
        <div className="option-box">
          <button className="option-btn" onClick={navigateToDumbBot}>
            Try with Dumb Bot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;