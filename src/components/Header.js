import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { authActions } from '../store';

const Header = () => {

  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && <li>
            <a href='/'>My Products</a>
          </li>}
          {isAuthenticated && <li>
            <a href='/'>My Sales</a>
          </li>}
          {isAuthenticated && <li>
            <button onClick={() => dispatch(authActions.logout())}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
