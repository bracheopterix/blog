import { JSX, useState, useEffect } from "react";
import styles from "./card.module.css";
import Card from "./Card.tsx";
import { CardType, Style,StyleObj } from './types.ts'

/// make it TSx
/// make it pretty


function MemoryGame(): JSX.Element {

    /// CHECKS ///

    if (!styles) {
        throw new Error('styles are absent');
    }



    /// DATA ///
    // ! to add new style to pool - add array, add his name to stylePool and add variant to styleSwitch

    let pool: Style = []; //starter pool
    let stylePool: string[] = ['market', 'sushi','harvest'];

    
    const AllStyles:StyleObj = {
        'market':[{ name: 'fish', src: './src/MemoryGame/img/market/salmon.png' }, { name: 'cider', src: './src/MemoryGame/img/market/cider-drink.png' }, { name: 'cheese', src: './src/MemoryGame/img/market/cheese.png' }, { name: 'bread', src: './src/MemoryGame/img/market/rolls.png' }, { name: 'vegs', src: './src/MemoryGame/img/market/vegetable.png' }, { name: 'beer', src: './src/MemoryGame/img/market/beer.png' }, { name: 'apple3', src: './src/MemoryGame/img/market/apple(3).png' }, { name: 'bread&fish', src: './src/MemoryGame/img/market/bread-and-fish.png' }],
        'sushi':[{ name: 'sauce', src: './src/MemoryGame/img/sushi/sauce.png' }, { name: 'nigiri', src: './src/MemoryGame/img/sushi/nigiri.png' }, { name: 'jjamppong', src: './src/MemoryGame/img/sushi/jjamppong.png' }, { name: 'tepache', src: './src/MemoryGame/img/sushi/tepache.png' }, { name: 'wasabi', src: './src/MemoryGame/img/sushi/wasabi.png' }, { name: 'maki', src: './src/MemoryGame/img/sushi/anakyu-maki.png' }, { name: 'dumplings', src: './src/MemoryGame/img/sushi/dumplings.png' }, { name: 'gyoza', src: './src/MemoryGame/img/sushi/gyoza.png' }],
        'harvest':[{ name: 'apple', src: './src/MemoryGame/img/harvest/apple.png' }, { name: 'apple1', src: './src/MemoryGame/img/harvest/apple(1).png' }, { name: 'apple2', src: './src/MemoryGame/img/harvest/apple(2).png' }, { name: 'blueberry', src: './src/MemoryGame/img/harvest/blueberry.png' }, { name: 'oak', src: './src/MemoryGame/img/harvest/oak.png' }, { name: 'orange', src: './src/MemoryGame/img/harvest/orange.png' }, { name: 'pomegranate', src: './src/MemoryGame/img/harvest/pomegranate.png' }, { name: 'pumpkin', src: './src/MemoryGame/img/harvest/pumpkin.png' },{ name: 'grape', src: './src/MemoryGame/img/harvest/grape.png' }],

    };
    ///////


    /// STATES ///

    const [game, setGame] = useState<Style>([]); // game state
    const [stepCounter, setStepCounter] = useState<number>(0);
    const [wonCounter, setWonCounter] = useState<number>(0);
    const [chosen1, setChosen1] = useState<CardType | undefined>(undefined);
    const [chosen2, setChosen2] = useState<CardType | undefined>(undefined);
    const [style, setStyle] = useState<string>('market');
    const [classStyle,setClassStyle] = useState<string>(style);
    const [cardAmmount, setCardAmmount] = useState<number>(5);

    
    /// EFFECTS ///

    useEffect(() => {
        // changing when game is not started with changing cardAnnount
        const hasOpenCards: Boolean = game.some(card => card.open);
        {
            if (!hasOpenCards) {
                setGame(createGame());
            }
        }
    }, [cardAmmount]

        // changes only when StartButton on
        // setGame(createGame());
        // }, []
    );


    /// FUNCTIONS ///

    function shuffleArray(array: Style): Style {
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



    function createGame(): Style { // uses shiffleArray()
        setChosen1(undefined);
        setChosen2(undefined);
        setWonCounter(0);
        setStepCounter(0);
        setClassStyle(style);

        let game: Style = [];
        pool = AllStyles[style];   
        pool = shuffleArray(pool);
        pool = pool.slice(0, cardAmmount);
        console.log(cardAmmount, pool);

        for (let el of pool) {
            const el1: CardType = { ...el, open: false, won: false };  // { } means that we are cteating new entity, not just making references
            const el2: CardType = { ...el, open: false, won: false };  // and then transfer all el data as props
            game.push(el1);
            game.push(el2);
        }
        console.log('game created');

        game = shuffleArray(game);
        return game;
    }

    /////////////////////////////////////////////////////////////////////////

    function checkGame(card: CardType): void {
        if (Card !== undefined&&!card.won) {
            if (wonCounter !== game.length) {
                let index = card.index;

                /// OPENING CARD
                let openedCardGame: Style = game.map(gameCard => // ATTENTION!! `V` CHOSEN1 is '?'
                    ((card.index === gameCard.index && !gameCard.open || chosen1?.index === gameCard.index) ? { ...gameCard, open: true } : { ...gameCard, open: false })
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
                        setChosen1(undefined);
                        setChosen2(undefined);
                        setStepCounter((stepCounter) => stepCounter + 1);

                    }
                }
            }
        }


    }

    //////////////////////////////////////////////////////////////

    function changeStyle(): void {

        const selectStyle = document.getElementById('gameStyle') as HTMLInputElement;
        // IMPORTANT! just HTMLElement doesn't have .value, but this ^ does.
        if (selectStyle) {
            setStyle(selectStyle.value);
            console.log('selected style - ', selectStyle.value);
        }
        else {
            throw new Error("didn't find select game style element");
        }
    }

    function changeCardAmmount() {
        const selectAmmount = document.getElementById('gameCardAmmount') as HTMLInputElement;
        if (selectAmmount) {
            setCardAmmount(Number(selectAmmount.value));
        }
        else {
            throw new Error("didn't find select game card ammount element");
        }

    }


    return <div id="gameTable" className={`${styles.gameTable} ${styles[classStyle]}`}>
        <div className={styles.gameName}>Fair and Square
            <p className={wonCounter !== game.length ? styles.hidden : styles.winningP}>WON</p>
        </div>
        <div className={styles.cardHolder}>
            {
                game.map((card: CardType, index: number) => ( ///////////////
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
        <div className={styles.buttonHolder}>
            <div className={styles.stepCounter}>Steps: {stepCounter}</div>

            <p className={`${styles.startGame} ${styles.buttonLike}`} onClick={() => setGame(createGame())}>Start Game</p>

            <select name="style" id="gameStyle" className={styles.gameStyle} onChange={changeStyle}>
                {stylePool.map((styleName, index) => (
                    <option value={styleName} key={index}>{styleName}</option> // or make it outside of the map by hand lol
                ))}
            </select>



        </div >
        <div className={styles.tileCount}>
            <label htmlFor="gameCardAmmount">Ammount of pairs</label>
            <input className={styles.range} id="gameCardAmmount" type='range' min="1" max="6" step="1" list="markers" onChange={changeCardAmmount} />
            <datalist id="markers">
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
                <option value="6" label="6"></option>

            </datalist>
        </div>
    </div>

}

export default MemoryGame; 