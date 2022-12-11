import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyFooter from './components/MyFooter/MyFooter';
import MyHeader from './components/MyHeader/MyHeader';

import './components/utils/appHeight';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyHeader />
    <App />
    <MyFooter />
  </React.StrictMode>
);
