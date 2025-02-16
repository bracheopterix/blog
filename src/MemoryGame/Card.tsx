import { JSX } from "react"; // this is why we can have nice things
import styles from "./card.module.css";
import { CardType, CheckGameFunction } from './types.ts'



type CardProps = {
    card: CardType,
    index: number,
    checkGame: CheckGameFunction
}


function Card({ card, index, checkGame }: CardProps): JSX.Element {
    card.index = index;

    function onClick() {
        checkGame(card);
    }

    return <div className={`${styles.card} ${styles.buttonLike} ${card.won ? styles.won : ''} ${(card.open && !card.won) ? styles.open : ''}`} onClick={onClick}>
        <div className={(card.open || card.won) ? '' : styles.hidden}>
            <img className={styles.cardImg} src={card.src}></img>
        </div>

    </div>
}

export default Card;