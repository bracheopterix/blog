import react, { useState, useEffect } from "react";
import styles from "./card.module.css";
import Card from "./Card";





function MemoryGame() {

    /// CHECKS ///

    if (!styles) {
        throw new Error('styles are absent');
    }

    /// DATA ///

    const pool = [{ name: "archi-tekt" }, { name: 'flower' }, { name: 'house' }, { name: "pie" }, { name: 'man' }, { name: 'pop' }, { name: 'scythe' }, { name: 'sun' }]; // [{name,src},{name2,src2},{name3,src3}]

    /// TYPES ///
    
    type Car = {
        name: String,
        index?:number,

    }

    type Cho = {
        card:any,
        index:number|boolean
    }
    


    /// STATES ///

    const [game, setGame] = useState([]); // game state
    const [chosen1, setChosen1] = useState({ 'card': false, 'index': false });
    const [chosen2:, setChosen2] = useState({ 'card': false, 'index': false });

    /// EFFECTS ///

    useEffect(() => {
        setGame(createGame()); // First render game creation
    }, []);

    /// FUNCTIONS ///

    function createGame() { // uses shiffleArray()
        let game = [];

        for (let el of pool) {
            const el1 = el;
            // el.isFlipped = false;
            const el2 = el;
            // el.isFlipped = false;
            game.push(el1, el2);
        }
        console.log('game created');

        game = shuffleArray(game);
        return game;
    }

    function shuffleArray(array) { 
        // Fisher–Yates (aka Knuth) Shuffle.
        let currentIndex = array.length;

        while (currentIndex !== 0) {

            // picking a remaining element (???)
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;


            // swapping places
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

            // let swap = array[currentIndex];
            // array[currentIndex] = array[randomIndex];
            // array[randomIndex] = swap;
            //

        }
        console.log('game shuffled');
        return array;
    }

    function checkGame(card, index) {
        if (!chosen1.card) {
            setChosen1({ 'card': card, 'index': index });
        }
        else {
            if (card.name === chosen1.card.name && index === chosen1.index) {
                // setChosen1({ 'card': card, 'index': index });
            }
            if (card.name === chosen1.card.name && index !== chosen1.index) {
                console.log('you have won');
                setChosen2({ 'card': card, 'index': index });
            }
            else {

                setChosen1((card) => (false));
                setChosen1((index) => (false));

            }
        }

        console.log('chosen1', chosen1);
    }

    //


    return <div id="gameTable" className={styles.gameTable}>
        <div className={styles.cardHolder}>
            {
                game.map((card, index) => (
                    <Card
                        card={card}
                        index={index}
                        key={index}
                        checkGame={checkGame}
                    />
                )
                )
            }
        </div>
        <p className={`${styles.startGame} ${styles.buttonLike}`} onClick={() => setGame(createGame())}>Start Game</p>



    </div >





}

export default MemoryGame;