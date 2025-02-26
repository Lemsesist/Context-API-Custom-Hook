import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import LikeButton from "./components/LikeButton";
import "./styles.css";

function App() {
    return (
        <ThemeProvider>
            <div className="app">
                <h1>Echo to website</h1>
                <p>We use echo-request to post and get requests through tunnels</p>
                <LikeButton />
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
}

export default App;
