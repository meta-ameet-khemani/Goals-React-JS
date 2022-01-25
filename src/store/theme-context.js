import { createContext, useState } from "react";

const ThemeContext = createContext({
    isLightTheme: undefined,
    toggleTheme: () => {}
});

export const ThemeContextProvider = (props) => {

    const [theme, updateTheme] = useState(true);

    const toggleThemeHandler = () => updateTheme(previousState => !previousState);

    return <ThemeContext.Provider value={{
        isLightTheme: theme,
        toggleTheme: toggleThemeHandler
    }}>
        {props.children}
    </ThemeContext.Provider>
};

export default ThemeContext;