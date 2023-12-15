import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const themeClass = isDarkMode ? 'dark' : 'light';

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            <div className={`app ${themeClass}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
