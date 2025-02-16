import react, { useState, useEffect } from "react";
import styles from "./card.module.css";
import CardType from "./Card";

/// make it TSx
/// make it pretty


function MemoryGame() {

    /// CHECKS ///

    if (!styles) {
        throw new Error('styles are absent');
    }

    /// DATA ///
    // ! to add new style to pool - add array, add his name to stylePool and add variant to styleSwitch

    let pool = []; //starter pool
    let stylePool = ['market', 'sushi'];

    const market = [{ name: 'fish', src: './src/MemoryGame/img/market/salmon.png' }, { name: 'berry', src: './src/MemoryGame/img/market/blueberry.png' }, { name: 'cheese', src: './src/MemoryGame/img/market/cheese.png' }, { name: 'bread', src: './src/MemoryGame/img/market/rolls.png' }, { name: 'vegs', src: './src/MemoryGame/img/market/vegetable.png' }, { name: 'wine', src: './src/MemoryGame/img/market/wine-bottle.png' }];
    const sushi = [{ name: 'sauce', src: './src/MemoryGame/img/sushi/sauce.png' }, { name: 'nigiri', src: './src/MemoryGame/img/sushi/nigiri.png' }, { name: 'jjamppong', src: './src/MemoryGame/img/sushi/jjamppong.png' }, { name: 'tepache', src: './src/MemoryGame/img/sushi/tepache.png' }, { name: 'wasabi', src: './src/MemoryGame/img/sushi/wasabi.png' }, { name: 'maki', src: './src/MemoryGame/img/sushi/anakyu-maki.png' }, { name: 'dumplings', src: './src/MemoryGame/img/sushi/dumplings.png' }, { name: 'gyoza', src: './src/MemoryGame/img/sushi/gyoza.png' }];


    /// STATES ///

    const [game, setGame] = useState([]); // game state
    const [stepCounter, setStepCounter] = useState(0);
    const [wonCounter, setWonCounter] = useState(0);
    const [chosen1, setChosen1] = useState(false);
    const [chosen2, setChosen2] = useState(false);
    const [style, setStyle] = useState('market');

    // let chosen1 = false;
    // let chosen2 = false;


    /// STYLE SWITCH ///
    function checkStyle() {
        switch (style) {
            case 'market':
                console.log('chosen pool = market');
                return market;
            case 'sushi':
                console.log('chosen pool = sushi');
                return sushi;
            default:
                throw new Error('there is no such style yet');
        }
    }


    /// EFFECTS ///

    useEffect(() => {
        setGame(createGame()); // First render game creation
    }, []);

    /// FUNCTIONS ///

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

    function cardChooser(pool,n) { // DOESN'T WORK!!! // set exact number of cards to play - n 
        const chosenHashMap = {};
        // console.log(pool);

        for (let i = 0; i < n; i++) {
            const newCardIndex = Math.floor(Math.random * pool.length);
            if (!Object.hasOwn(chosenHashMap,newCardIndex.toString)) {
                chosenHashMap[newCardIndex] = pool[newCardIndex];
            }
        }
        pool = Object.values(chosenHashMap);
        console.log(pool);
        // return pool;
    }
    cardChooser(pool,2);

    function createGame() { // uses shiffleArray()
        setChosen1(false);
        setChosen2(false);
        setWonCounter(0);
        setStepCounter(0);

        let game = [];
        pool = checkStyle();
        // pool = cardChooser(pool,6); not working
        console.log(pool);

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

  

    function checkGame(card) {
        if (wonCounter !== game.length) {
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
                        console.log('right move', chosen1, chosen2);
                        setWonCounter((wonCounter) => wonCounter + 2);

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
                    setStepCounter((stepCounter) => stepCounter + 1);

                }
                // setStepCounter((stepCounter) => stepCounter + 1);

            }
        }


    }


    function changeStyle() {
        const selectStyle = document.getElementById('gameStyle');
        setStyle(selectStyle.value);
        console.log('selected style - ', selectStyle.value);
    }


    return <div id="gameTable" className={styles.gameTable}>
        <div className={styles.gameName}>Fair and Square
            <p className={wonCounter !== game.length ? styles.hidden : styles.winningP}>WON</p>
        </div>
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
        <div className={styles.cardHolder}>
            <div className={styles.stepCounter}>Steps: {stepCounter}</div>

            <p className={`${styles.startGame} ${styles.buttonLike}`} onClick={() => setGame(createGame())}>Start Game</p>

            <select name="style" id="gameStyle" className={styles.gameStyle} onChange={changeStyle}>
                {stylePool.map((styleName, index) => (
                    <option value={styleName} key={index}>{styleName}</option> // or make it outside of the map by hand lol
                ))}
            </select>
        </div>




    </div >





}

export default MemoryGame;