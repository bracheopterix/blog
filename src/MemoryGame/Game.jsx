import react, { useState, useEffect } from "react";
import styles from "./card.module.css";
import Card from "./Card";





function MemoryGame() {

    /// CHECKS ///

    if (!styles) {
        throw new Error('styles are absent');
    }

    /// DATA ///

    const pool = [{name:"my love"},{ name: "archi-tekt" }, { name: 'flower' }, { name: 'house' }, { name: "pie" }, { name: 'man' }, { name: 'pop' }, { name: 'scythe' }, { name: 'sun' }]; // [{name,src},{name2,src2},{name3,src3}]

    /// STATES ///

    const [game, setGame] = useState([]); // game state
    const [chosen1, setChosen1] = useState(false);
    const [chosen2, setChosen2] = useState(false);

    // let chosen1 = false;
    // let chosen2 = false;

    /// EFFECTS ///

    useEffect(() => {
        setGame(createGame()); // First render game creation
    }, []);

    /// FUNCTIONS ///

    function createGame() { // uses shiffleArray()
        setChosen1(false);
        setChosen2(false);
        
        let game = [];

        for (let el of pool) {
            const el1 = { ...el, open: false, won: false };  // { } means that we are cteating new entity, not just making references
            const el2 = { ...el, open: false, won: false };  // and then transfer all el data as props
            game.push(el1);
            game.push(el2);
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

    function checkGame(card) {
        let index = card.index;

        /// OPENING CARD
        let openedCardGame = game.map(gameCard =>
            ((card.index === gameCard.index && !gameCard.open || chosen1.index === gameCard.index) ? { ...gameCard, open: true } : { ...gameCard, open: false })
            // this card that we opened, which wasn't opened before 
            //and which is setChosen1!!!
        );
        setGame(openedCardGame);


        if (!chosen1) {
            setChosen1(card);

        }
        else {

            if (card.index === chosen1.index) {
                console.log('you choosed the same tile, nothing have changed')
            }
            else {
                if (card.name === chosen1.name && index !== chosen1.index) {
                    console.log('you have won', chosen1, chosen2);

                    /// ADDING WON STATE to the won cards
                    let updatedGame = game.map(gameCard =>
                        (chosen1.index === gameCard.index || card.index === gameCard.index) ? { ...gameCard, won: true, open: false } : gameCard
                    ); // after: - is what to do if you would not find the match

                    setGame(updatedGame);
                    // first - change data, second - rewrite state.
                }

                console.log('resetting')
                setChosen1(false);
                setChosen2(false);
            }
        }
    }


    return <div id="gameTable" className={styles.gameTable}>
        <div className={styles.gameName}>Fair and Square</div>
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