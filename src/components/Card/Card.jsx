import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ symbol, base, rates, addToFavorited, onFavorites }) {
  const [isFavorited, setIsFavorited] = useState(onFavorites);

  const onClickCheck = () => {
    addToFavorited(symbol);
    setIsFavorited(onFavorites);
  };

  return (
    <div className={styles.card}>
      <p>
        1 {base} - {rates[symbol].toFixed(2) + " " + symbol}
      </p>
      <img
        width={38}
        height={38}
        onClick={onClickCheck}
        src={isFavorited ? "img/favorite (1).png" : "img/favorite.png"}
        alt="save"
      />
    </div>
  );
}

export default Card;
