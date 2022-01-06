import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

function App() {

  const [isLoggedIn, updateLogStatus] = useState(false);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', 1);
    updateLogStatus(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    updateLogStatus(false);
  }

  useEffect(() => {
    const getLogStatus = localStorage.getItem('isLoggedIn');
    if (getLogStatus === 1) {
      updateLogStatus(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Header onLogout={logoutHandler} isLoggedIn={isLoggedIn} />
      { isLoggedIn && <Home onLogout={logoutHandler} /> }
      { !isLoggedIn && <Login login={loginHandler} /> }
    </React.Fragment>
  );
}

export default App;
