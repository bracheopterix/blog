import styles from './Gamez.module.css';
import defStyles from './Sertar.module.css'
import ChimpRace from "../ChimpRace/Game";
import MemoryGame from "../MemoryGame/Game";



function Games (){


    return (<>
    
        <div className={`${styles.gamesHolder} ${defStyles.flexColumn}`}>
        <MemoryGame />
        <ChimpRace />
        </div>
        
    </>)
}

export default Games;