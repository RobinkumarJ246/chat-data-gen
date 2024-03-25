import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import '../styles/Home.css';

const Home = ({ authStore }) => {
  const navigate = useNavigate();
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleLogout = () => {
    authStore.logout();
    console.log('Logged out');
    console.log(authStore.isLoggedIn);
    navigate('/');
  };

  const NavigateToRooms = () => {
    navigate('/rooms');
  };

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <div className="home-container">
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              Chat Data Generator
            </Link>
          </div>
          <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleSideMenu}>
            <span className="navbar-toggle-icon"></span>
          </button>
        </nav>
      </header>
      <div className={`side-menu ${showSideMenu ? 'show' : ''}`}>
        <div className="side-menu-header">
          <h3>Menu</h3>
          <button className="side-menu-close" onClick={toggleSideMenu}>
            &times;
          </button>
        </div>
        <div className="side-menu-tiles">
          <div className="tile" onClick={NavigateToRooms}>
            <span className="tile-icon">&#128172;</span>
            <span className="tile-label">Generate Data</span>
          </div>
          <div className="tile">
            <span className="tile-icon">&#128228;</span>
            <span className="tile-label">Manage Data</span>
          </div>
          <Link to="/profile" className="tile">
            <span className="tile-icon">&#9881;</span>
            <span className="tile-label">Profile</span>
          </Link>
          <div className="tile">
            <span className="tile-icon">&#x2606;</span>
            <span className="tile-label">What's new</span>
          </div>
          {!authStore.isLoggedIn ? (
            <>
              <Link to="/register" className="tile">
                <span className="tile-icon">&#128100;</span>
                <span className="tile-label">Register</span>
              </Link>
              <Link to="/signin" className="tile">
                <span className="tile-icon">&#128273;</span>
                <span className="tile-label">Sign In</span>
              </Link>
            </>
          ) : (
            <Link to="/" onClick={handleLogout} className="tile">
              <span className="tile-icon">&#128682;</span>
              <span className="tile-label">Logout</span>
            </Link>
          )}
        </div>
      </div>
      <div className="main-content">
        <main>
          <section className="hero">
            <h1>Welcome to Chat Data Generator</h1>
            <h4>Version: 0.8 (Carrot)</h4>
            <p>Generate high-quality chat datasets for training your conversational AI models.</p>
          </section>
          <section className="features">
            <div className="feature-card">
              <h2>Customizable Datasets</h2>
              <p>Create datasets tailored to your specific use case and domain, with flexible options for controlling the content and style.</p>
            </div>
            <div className="feature-card">
              <h2>Natural Conversations</h2>
              <p>Our advanced algorithms ensure that the generated conversations are natural, coherent, and context-aware.</p>
            </div>
            <div className="feature-card">
              <h2>Scalable Generation</h2>
              <p>Generate datasets of any size, from a few thousand conversations to millions, with fast and efficient processing.</p>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Chat Data Generator. All rights reserved.</p>
          <p>For contact mail at innovatexcel.team@gmail.com</p>
        </footer>
      </div>
    </div>
  );
};

export default inject('authStore')(observer(Home));