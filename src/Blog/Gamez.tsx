import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import styles from './Gamez.module.css';
import defStyles from './Sertar.module.css'
import ChimpRace from "../ChimpRace/Game";
import MemoryGame from "../MemoryGame/Game";



function Games() {

    const [gameNumber, setGameNumber] = useState<number>(0);
    const maxGameAmount: number = 1;

    const navigate = useNavigate();

    function onClickLeft(): void {
        if (gameNumber !== 0) {

            const prevGame = gameNumber - 1;
            setGameNumber(prevGame);
            navigate(`/games/game${prevGame}`);
        }
    }

    function onClickRight(): void {
        if (gameNumber < maxGameAmount) {
            const nextGame = gameNumber + 1;
            setGameNumber(nextGame);
            navigate(`/games/game${nextGame}`)
        }
    }



    return (<>

        <div className={`${styles.page} ${defStyles.flexColumn}`}>

            <div className={`${styles.arrowHolder} ${defStyles.flexRow}`}>
                <img src={`${new URL("../assets/icons/ArrowCopyGray.svg", import.meta.url).href}`} className={`${styles.arrow} ${styles.left}`}></img>
                <div className={`${styles.arrow} ${styles.left} ${styles.arrowTop}`} onClick={onClickLeft}></div>
                <img src={`${new URL("../assets/icons/ArrowCopyGray.svg", import.meta.url).href}`} className={`${styles.arrow} ${styles.right}`}></img>
                <div className={`${styles.arrow} ${styles.right} ${styles.arrowTop}`} onClick={onClickRight}></div>


            </div>

            <div className={styles.gamesHolder}>
                <Routes>
                    <Route path="/" element={<Navigate to="/games/game0" replace />} />
                    <Route path="/game0" element={<MemoryGame />} />
                    <Route path="/game1" element={<ChimpRace />} />
                </Routes>
            </div>
            <div className={defStyles.blockFooter}></div>

        </div >

    </>)
}

export default Games;