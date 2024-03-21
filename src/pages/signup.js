import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'D:\\Projects\\chatdatagen\\chatdatagen\\src\\styles\\SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your logic to authenticate the user
    // For example, you can make an API call to your backend
    console.log('Email:', email);
    console.log('Password:', password);
    // After successful authentication, you can navigate to another page
    navigate('/dashboard');
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

export default SignIn;