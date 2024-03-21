import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'D:\\Projects\\chatdatagen\\chatdatagen\\src\\styles\\Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your logic to handle the registration
    // For example, you can make an API call to your backend
    console.log('Registration Data:', formData);
    // After successful registration, you can navigate to another page or show a success message
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
          {/*}<div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
  </div>{*/}
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

export default Register;