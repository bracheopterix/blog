import { useState, JSX, useEffect } from "react";
import styles from './Game.module.css'
import { CardType } from './types'

interface CardProps {
    card: CardType,
    index: number,
    openCard: (index: number) => void
}



function Card({ card, index, openCard }: CardProps): JSX.Element {


    function onClick() {
        openCard(index);
    }

    const number = card.number
    return <div className={`${styles.card} ${styles.buttonLike} ${(card.open && !card.lost) ? styles.open : ''}${card.lost ? styles.lost : ''} `} onClick={onClick}>
        <p className={`${styles.cardNumber} ${card.open ? '' : styles.hidden}`}>{number}</p>
        {/* <p className={`${styles.cardNumber}`}>{number}</p> */}

    </div>
}

export default Card;