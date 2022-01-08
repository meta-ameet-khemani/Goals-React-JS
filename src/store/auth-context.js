import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { }
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, updateLogStatus] = useState(false);

    useEffect(() => {
        const getLogStatus = localStorage.getItem('isLoggedIn');
        if (getLogStatus === '1') {
            updateLogStatus(true);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 1);
        updateLogStatus(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        updateLogStatus(false);
    }

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }} >
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;