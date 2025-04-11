import Git from './Lectures/Git'
import styles from './Conspectus.module.scss'
import { useState } from 'react'
import Miscellaneous from './Lectures/Miscellaneous';
import Therms from './Lectures/Therms';


function Conspectus() {

    const [isTherms, setTherms] = useState<boolean>(false);
    const [isGit, setGit] = useState<boolean>(false);
    const [isMis, setMis] = useState<boolean>(false);


    return (

        <div className={styles.mainContainer}>


            <div className={styles.card}>
                <button id="thermsButton"
                    className={isTherms ? styles.cardHeaderOpen : styles.cardHeaderClosed}
                    onClick={() => setTherms((prev) => !prev)}
                >
                    <h2>Therms</h2>
                </button>
                <div className={isTherms ? styles.cardContent : styles.folded}>
                    <Therms isGit={isTherms} />
                </div>

            </div>


            <div className={styles.card}>
                <button id="gitButton"
                    className={isGit ? styles.cardHeaderOpen : styles.cardHeaderClosed}
                    onClick={() => setGit((prev) => !prev)}
                >
                    <h2>Git</h2>
                </button>
                <div className={isGit ? styles.cardContent : styles.folded}>
                    <Git isGit={isGit} />
                </div>

            </div>

            <div className={styles.card}>

                <button id="misButton"
                    className={isMis ? styles.cardHeaderOpen : styles.cardHeaderClosed}
                    onClick={() => setMis((prev) => !prev)}
                >
                    <h2>Miscellaneous</h2>
                </button>
                <div className={isMis ? styles.cardContent : styles.folded}>
                    <Miscellaneous isMis={isMis} />
                </div>


            </div>


        </div >
    )
}

export default Conspectus