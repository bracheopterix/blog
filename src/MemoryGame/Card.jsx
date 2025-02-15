import react, { useState } from "react";
import styles from "./card.module.css";






function Card({ card, index, checkGame }) {
    card.index = index;
    const name = card.name;

    function onClick() {
        console.log(card, card.index);
        checkGame(card, card.index);
    }

    return <div className={`${styles.card} ${styles.buttonLike} ${card.won ? styles.won : ''} ${(card.open && !card.won) ? styles.open : ''}`} onClick={onClick}>
        <div className={(card.open || card.won) ? '' : styles.hidden}>
            <p className={styles.name}>{name}</p>
            <p className={styles.name}>{card.index}</p>
        </div>

    </div>
}

export default Card;