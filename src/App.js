import React, { useContext } from 'react';
import Header from './components/layout/Header';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <Header />
      <main>
        {ctx.isLoggedIn && <Home />}
        {!ctx.isLoggedIn && <Login />}
      </main>
    </React.Fragment>
  );
}

export default App;
