import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './LogInOutButton.module.css';

const LogInOutButton = () => {
  
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  if (ctx.loggedInUser) {
    return (
      <button className={classes.button} onClick={() => {
        ctx.logout();
        navigate('/');
      }}>
        <span>Logout</span>
      </button>
    );
  } else {
    return (
      <button className={classes.button} onClick={() => {
        navigate('/logIn');
      }}>
        <span>Login</span>
      </button>
    );
  }
};

export default LogInOutButton;
