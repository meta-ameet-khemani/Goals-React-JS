import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import LogInOutButton from "../UI/LogInOutButton";
import classes from "./Header.module.css";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <NavLink to="/">
          <h1>Expense Tracker</h1>
        </NavLink>
        <nav>
          <ul>
            { ctx.loggedInUser && <li>
              <NavLink to="/allExpenses">All Expenses</NavLink>
            </li> }
            <li>
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            {/* <li>
              <NavLink to="/logIn">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signUp">Sign Up</NavLink>
            </li> */}
          </ul>
          <span className={classes.loginButton}>
            <LogInOutButton />
          </span>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
