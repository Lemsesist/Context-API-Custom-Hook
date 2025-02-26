import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const { theme } = useTheme();

    return (
        <button
            onClick={() => setLiked(!liked)}
            className={`like-btn ${theme}`}
        >
            {liked ? "❤️" : "🤍"}
        </button>
    );
};

export default LikeButton;
