import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
    loggedInUser: null,
    login: () => {},
    logout: () => {}
});

export const AuthContextProvider = props => {
    
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const loggedUser = localStorage.getItem('loggedInUser');
        console.log('loggedUser', loggedUser, loggedUser !== null);
        if (loggedUser !== null) {
            setLoggedInUser(loggedUser);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem('loggedInUser', '1');
        setLoggedInUser('1');
    };
    const logoutHandler = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
    }
    
    return <AuthContext.Provider
        value={{
            loggedInUser,
            login: loginHandler,
            logout: logoutHandler
        }}
    >
        {props.children}
    </AuthContext.Provider>;
}

export default AuthContext;
