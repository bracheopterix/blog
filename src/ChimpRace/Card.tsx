import { useState, JSX } from "react";
import styles from './card.module.css'
import { CardType } from './types'

interface CardProps {
    card: CardType,
    index: number,
    openCard: (index:number) => void
}



function Card({ card, index, openCard }: CardProps): JSX.Element {

    function onClick() {
        openCard(index);
    }

    const number = card.number
    return <div className={`${styles.card} ${styles.buttonLike}`} onClick={onClick}>
        <p className={`${styles.cardNumber}`}>{number}</p>
    </div>
}

export default Card;