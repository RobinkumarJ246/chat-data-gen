import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import '../styles/Profile.css'; // Import profile page styling

const Profile = ({ authStore }) => {
  // Access user details from authStore
  const { user } = authStore;

  // Render user details and extra content in the UI
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-info">
        <p><strong>Name:</strong> {user ? user.userName : 'N/A'}</p>
        <p><strong>Email:</strong> {user ? user.email : 'N/A'}</p>
      </div>
      <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
        <Link to="/tac">
          <button className="back-btn">Terms and Conditions</button>
        </Link>
    </div>
  );
};

export default inject('authStore')(observer(Profile));