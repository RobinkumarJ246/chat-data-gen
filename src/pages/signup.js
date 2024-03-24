import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignIn.css';
import { inject, observer } from 'mobx-react';

const SignIn = ({ authStore }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your server to authenticate the user
      const response = await axios.post('https://chat-data-gen-server.onrender.com/api/login', { email, password });

      if (response.status === 200) {
        // Authentication successful
        console.log(response.data.message);

        // Set the user details and login state in the authStore
        authStore.setUserDetails({ email, password });
        authStore.login();

        console.log('Logged in');
        console.log(authStore.isLoggedIn);

        // Navigate to the desired page after successful login
        navigate('/dashboard');
      } else {
        // Authentication failed
        alert(response.data.error || 'Login failed. Please try again later.');
      }
    } catch (err) {
      // Handle authentication error
      console.error('Login error:', err);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default inject('authStore')(observer(SignIn));