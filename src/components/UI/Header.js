import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import food from '../../assets/food.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Food Order</h1>
            <HeaderCartButton onShowCart={props.onShowCart} />
        </header>
        <img src={food} className={classes['main-image']} alt="Food Order" />
    </Fragment>
};

export default Header;