import { createContext, useState, useEffect } from "react";

// Создаем контекст
export const ThemeContext = createContext();

// Провайдер для темы
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Изменяем класс <body> при смене темы
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
