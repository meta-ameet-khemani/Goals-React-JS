import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CounterContextProvider } from './store/index';

ReactDOM.render(
  <CounterContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CounterContextProvider>,
  document.getElementById('root')
);
