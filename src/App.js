import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/signup';
import Register from './pages/Register';
import ChatInterface from './pages/ChatInterface';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat-interface" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
};

export default App;