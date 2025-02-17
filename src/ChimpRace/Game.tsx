import React, { JSX, useState } from "react";
import styles from './card.module.css';

/// DATA ///
let pool = [];

/// STATES ///

const [chosenNumbers, setChosenNumbers] = useState<number>(5);

/// FUNCTIONS ///

function choosePool(): void {
    let chooseNumbers = document.getElementById('gameNumbersAmmount') as HTMLInputElement;
    setChosenNumbers(Number(chooseNumbers.value));
}

function startGame(): void {

}

// Chimp-i-on?

function ChimpRace(): JSX.Element {
    return <div id="gameTable" className={`${styles.gameTable} ${styles[classStyle]}`}>
        <div className={styles.gameName}>Chimp Race</div>
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
            <label htmlFor="gameNumbersAmmount">Ammount of pairs</label>
            <input className={styles.range} id="gameNumbersAmmount" type='range' min="1" max="6" step="1" list="markers" onChange={changeCardAmmount} />
            <datalist id="markers">
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>

            </datalist>
        </div>
    </div>
}

return default ChimpRace;