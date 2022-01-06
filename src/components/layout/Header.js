import React from "react";
import Navigation from "./Navigation";

const Header = props => {
    return <React.Fragment>
        Header
        { props.isLoggedIn ? <Navigation onLogout={props.onLogout} /> : <p></p> }
    </React.Fragment>
}

export default Header;