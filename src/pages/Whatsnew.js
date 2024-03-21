import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Home.css';

const Whatsnew = () => {
  
  return (
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
  );
};

export default Whatsnew;