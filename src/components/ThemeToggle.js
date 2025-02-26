import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="toggle-btn">
            Exchange Theme
        </button>
    );
};

export default ThemeToggle;
