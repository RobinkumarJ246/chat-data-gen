import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Chat Data Generator</h3>
        </div>
        <div className="sidebar-tiles">
          <Link to="/chat-interface" className="tile">
            <span className="tile-icon">&#128172;</span>
            <span className="tile-label">Generate Data</span>
          </Link>
          <div className="tile">
            <span className="tile-icon">&#128228;</span>
            <span className="tile-label">Manage Data</span>
          </div>
          <div className="tile">
            <span className="tile-icon">&#9881;</span>
            <span className="tile-label">Settings</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <header>
          <nav className="navbar">
            <div className="navbar-brand">Chat Data Generator</div>
            <div className="navbar-links">
              <Link to="/register" className="nav-link">
                Register
              </Link>
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            </div>
          </nav>
        </header>
        <main>
          <section className="hero">
            <h1>Welcome to Chat Data Generator</h1>
            <h4>Version: 0.1 (Carrot)</h4>
            <p>
              Generate high-quality chat datasets for training your conversational AI models.
            </p>
          </section>
          <section className="features">
            <div className="feature-card">
              <h2>Customizable Datasets</h2>
              <p>
                Create datasets tailored to your specific use case and domain, with flexible options for controlling the content and style.
              </p>
            </div>
            <div className="feature-card">
              <h2>Natural Conversations</h2>
              <p>
                Our advanced algorithms ensure that the generated conversations are natural, coherent, and context-aware.
              </p>
            </div>
            <div className="feature-card">
              <h2>Scalable Generation</h2>
              <p>
                Generate datasets of any size, from a few thousand conversations to millions, with fast and efficient processing.
              </p>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Chat Data Generator. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;