import { JSX, useEffect, useState, useRef } from "react";
import styles from './card.module.css'
import { CardType } from './types'
import Card from './Card'




function ChimpRace(): JSX.Element {

    /// TYPES ///




    /// STATES ///
    const [game, setGame] = useState<CardType[]>([]);
    const [checkGame, setCheckGame] = useState<number[]>([])
    const [cardAmount, setCardAmount] = useState<number>(7);
    const [stepCounter, setStepCounter] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<boolean | undefined>(undefined);
    const [timer, setTimer] = useState<number>(0);

    const checkIndex = useRef<number>(0);
    const startTime = useRef<number>(0);
    const gameStarted = useRef<boolean>(false);

    /// FUNCTIONS ///

    function getAmount() {
        let amount = document.getElementById('getAmount') as HTMLInputElement;
        const value = Number(amount.value);
        console.log(value);
        if (value >= 2 && value <= 11) {
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
        setGameStatus(undefined);
        setStepCounter(0);

        checkIndex.current = 0;
        startTime.current = performance.now();


        let newGame: CardType[] = [];
        let newPool: number[] = [...Array(cardAmount).keys()];
        console.log(newPool);
        setCheckGame(newPool);
        for (let el of newPool) {
            const newEl: CardType = {
                number: el,
                open: true,
                lost: false,
            }
            newGame.push(newEl);
        }
        newGame = shuffleArray(newGame);
        console.log('game set');
        gameStarted.current = false;
        return newGame;
    }


    function openCard(index: number) {

        if (gameStatus === undefined && gameStarted.current) {

            let updatedGame: CardType[] = game;
            if (game[index].number !== checkGame[checkIndex.current]) {
                console.log("you've lost", checkIndex);
                setGameStatus(false);
                updatedGame = updatedGame.map(gameCard => (game[index].number === gameCard.number) ? { ...gameCard, lost: true } : gameCard);
                checkIndex.current = 0;
            }
            if (checkIndex.current + 1 === game.length) {
                console.log("you've won", game.length, 'time = ', performance.now() - startTime.current, 'milliseconds');
                setGameStatus(true);
                checkIndex.current = 0;
            }
            updatedGame = updatedGame.map(gameCard => (game[index].number === gameCard.number) ? { ...gameCard, open: true, won: true } : gameCard);
            setGame(updatedGame);
            setStepCounter((stepCounter) => stepCounter + 1);
            checkIndex.current += 1;

        }

    }




    // function openCardReverse(index: number) {
    //     // checkIndex = game.length;

    //     game[index].open = true;
    //     console.log(`game[${index}]=${game[index].number}, checkGame[${checkIndex}]=${checkGame[checkIndex]}, Game = ${checkGame}`);
    //     console.log('reverse');

    //     if (game[index].number !== checkGame[checkIndex]) {
    //         console.log('you lose');
    //         checkIndex = 0;
    //     }
    //     if (game.length === 0) {
    //         console.log('you won');
    //         checkIndex = 0;
    //     }

    //     checkIndex -= 1;
    // }



    useEffect(() => {
        //starting game
        setGame(createGame);
        startTime.current = performance.now();
    }, [cardAmount]);

    useEffect(() => {
        // closing cards
        if (!gameStatus && checkIndex.current === 0) {
            const blindTime: number = game.length * 1000;   //// TIMEEEE!

            if (game.length > 0) {
                const timerOk = setTimeout(() => {
                    setGame((prevGame) => prevGame.map(card => ({ ...card, open: false })));
                    gameStarted.current = true;
                }, blindTime);
                return () => clearTimeout(timerOk);
            }
        }

    }, [game]);

    useEffect(() => {

        const diff = performance.now() - startTime.current;
        // buffer
        if (diff > 10) {
            setTimer(Math.floor(diff));
        }
        else {
            setTimer(0);
        }
    }, [gameStatus])


    return <div className={styles.gameTable}>

        <div className={styles.gameName}>Monkey-do

            <div className={styles.clue}>?</div>
        </div>

        <div className={styles.gameHeader}>

            <div className={styles.stepCounter}>{stepCounter}</div>

            {/* <div className={styles.gameName}>Monkey-do</div> */}

            <div className={styles.timer}>{timer}</div>


        </div>

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
            {/* <div className={styles.amount}>
                <input id='getAmount' className={styles.tileCount} onChange={getAmount}></input>
            </div> */}
            <input type='range' id='getAmount' className={styles.tileCount} step='1' min='2' max='11' onChange={getAmount}></input>

            <div className={styles.calc66}>
                <div className={`${styles.startGame} ${styles.buttonLike}`} onClick={() => setGame(createGame())}>Start Game</div>
            </div>

            {/* <div className={styles.nn}>
                <input type='range' id='getAmount' className={styles.tileCount} step='1' min='2' max='11' onChange={getAmount}></input>
            </div> */}






        </div>


    </div >
}

export default ChimpRace;