import React from 'react';

import classes from './Header.module.css';

const Header = props => {
  return <header className={classes.header}>
      <h1>Portal and Fragment Demo</h1>
      <button className={classes.btn} onClick={() => props.onLoginClick(true)}>Login</button>
  </header>;
};

export default Header;
