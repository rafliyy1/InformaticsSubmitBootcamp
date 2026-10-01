import { useState } from "react";

function Card({ name, profession, description }) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{profession}</h3>
      <p>{description}</p>

      <button onClick={handleLike}>👍 Like</button>
      <p className="like-count">Jumlah Like: {likes}</p>
    </div>
  );
}

export default Card;