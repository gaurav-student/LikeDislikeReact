import "./styles.css";
import { useState } from "react";
export default function App() {
  const [Likes, setLikes] = useState(100);
  const [Liked, setLiked] = useState(false);
  const LikeClicked = function () {
    if (Liked) {
      setLikes(Likes - 1);
      setLiked(false);
    } else {
      setLikes(Likes + 1);
      setLiked(true);
    }
  };
  return (
    <div className="App">
      <button className={Liked ? "like-button" : " "} onClick={LikeClicked}>
        Like | <span>{Likes}</span>
      </button>
    </div>
  );
}
