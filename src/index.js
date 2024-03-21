import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChatInterface from './pages/ChatInterface';
import { Provider } from 'mobx-react';
import App from './App';
import authStore from './AuthStore';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider authStore={authStore}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();