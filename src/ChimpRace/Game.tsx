import { JSX, useEffect, useState } from "react";
import styles from './card.module.css'
import { CardType } from './types'
import Card from './Card'




function ChimpRace(): JSX.Element {

    /// TYPES ///




    /// STATES ///
    const [game, setGame] = useState<CardType[]>([]);
    const [checkGame, setCheckGame] = useState<number[]>([])
    const [cardAmount, setCardAmount] = useState<number>(5);
    const [stepCounter, setStepCounter] = useState(0);

    let checkIndex = 0;

    /// FUNCTIONS ///

    function getAmount() {
        let amount = document.getElementById('getAmount') as HTMLInputElement;
        const value = Number(amount.value);
        if (value >= 2 && value <= 10) {
            setCardAmount(Number(value));
            console.log(cardAmount, value);
        }
        else {
            throw new Error('Please, enter valid amount');
        }
    }

    function shuffleArray(array: CardType[]): CardType[] {
        // Fisher–Yates (aka Knuth) Shuffle.
        let currentIndex = array.length;

        while (currentIndex !== 0) {

            // picking a remaining element (???)
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;


            // swapping places
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

        }
        console.log('game shuffled');
        return array;
    }

    function createGame(): CardType[] {
        let newGame: CardType[] = [];
        let newPool: number[] = [...Array(cardAmount).keys()];
        setCheckGame(newPool);
        for (let el of newPool) {
            const newEl: CardType = {
                number: el,
                open: false,
            }
            newGame.push(newEl);
        }
        newGame = shuffleArray(newGame);
        console.log('game set');
        return newGame;
    }

    function openCard(index: number) {
        game[index].open = true;
        console.log(`game[${index}]=${game[index].number}, checkGame[${checkIndex}]=${checkGame[checkIndex]}, Game = ${checkGame}`);

        
        if (game[index].number !== checkGame[checkIndex]) {
            console.log('you lose');
            checkIndex = 0;
        }
        if (checkIndex+1 === game.length) {
            console.log('you won');
            checkIndex = 0;
        }
        
        checkIndex += 1;
    }


    /// TIMER ///
    // const [time, setTime] = useState<number | undefined>(undefined);
    // const [timer, setTimer] = useState<number>(0)


    // useEffect(() => {
    //     setTimer(memberTime(performance.now()));
    //     console.log(timer);
    // }, [time])


    // function memberTime(now: number): number {
    //     let difference = 0;
    //     if (!time) {
    //         setTime(now);
    //     }
    //     else {
    //         difference = now - time;
    //     }
    //     return difference;
    // }
    ///

    useEffect(() => {
        setGame(createGame);
        console.log('game started');

    }, [cardAmount])


    return <div className={styles.gameTable}>
        <div className={styles.gameName}>Monkey-do</div>

        <div className={styles.timer}>TIMER</div>

        <div className={styles.cardHolder}>
            {
                game.map((card: CardType, index: number) => (
                    <Card
                        card={card}
                        index={index}
                        openCard={openCard}
                        key={index}
                    />
                ))
            }
        </div>
        <div className={styles.buttonHolder}>
            <div className={styles.stepCounter}>Steps: {stepCounter}</div>

            <div className={`${styles.startGame} ${styles.buttonLike}`} onClick={() => setGame(createGame())}>Start Game</div>

            <div className={styles.amount}>
                <label htmlFor="getAmount">2 - 10</label>
                <input id='getAmount' type='number' className={styles.tileCount} step='1' min='2' max='10' onChange={getAmount}></input>
            </div>
        </div>


    </div>
}

export default ChimpRace;