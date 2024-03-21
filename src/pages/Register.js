import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';
import { inject, observer } from 'mobx-react';

const Register = ({ authStore }) => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://chat-data-gen-server.onrender.com/api/register', formData);
  
      if (response.status === 200) {
        console.log(response.data.message);
  
        const emailResponse = await axios.post('https://chat-data-gen-server.onrender.com/api/welcome-mail', {
          toEmail: formData.email,
          subject: 'Account creation success',
          htmlContent: `
          <<head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to ChatDataGen</title>
      </head>
      <body style="font-family: Arial, sans-serif;">
      
          <!-- Header -->
          <header style="background-color: #f0f0f0; padding: 20px;">
              <h1 style="margin: 0; color: #333;">Welcome to ChatDataGen</h1>
          </header>
      
          <!-- Content -->
          <section style="padding: 20px;">
              <p>Hello ${formData.userName},</p>
              <p>Welcome to ChatDataGen! We're excited to have you on board.</p>
              <p>This webapp is created to help data scientists and AI model engineers to craft conversational datasets using simpler steps.</p>
              <p>The platform is still in beta development and can have bugs and errors, so please let us know your valuable feedback and suggestions that will greatly improve our solution.</p>
              <p>We thank you once again for joining is in early stage</p>
          </section>
      
          <!-- Footer -->
          <footer style="background-color: #f0f0f0; padding: 20px; text-align: center;">
              <p style="margin: 0;">Best regards,<br> Innovatexcel team</p>
          </footer>
      
      </body>
      </html>
        `,
        });
  
        console.log(emailResponse.data.message);
  
        authStore.setUserDetails(formData);
        authStore.login();
        console.log('Logged in');
        console.log(authStore.isLoggedIn);
        navigate('/');
      }
      else {
        // Registration failed
        alert(response.data.error || 'Registration is failed. Please try again later.');
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        // Registration failed due to existing email
        alert('Email already exists. Please login instead.');
      } else {
        // Other errors
        console.error('Registration error:', err);
        alert('Registration failed. Please try again later.');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="firstName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default inject('authStore')(observer(Register));