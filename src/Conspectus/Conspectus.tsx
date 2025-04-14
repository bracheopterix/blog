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
            <div className={styles.navigationBlock}>
                <h2>Conspectus Frontendus</h2>

                <button id="thermsButton"
                    className={isTherms ? styles.cardHeaderOpen : styles.cardHeaderClosed}
                    onClick={() => setTherms((prev) => !prev)}
                >
                    <h3>Therms</h3>
                </button>

                <button id="gitButton"
                    className={isGit ? styles.cardHeaderOpen : styles.cardHeaderClosed}
                    onClick={() => setGit((prev) => !prev)}
                >
                    <h3>Git</h3>
                </button>

                <button id="misButton"
                    className={isMis ? styles.cardHeaderOpen : styles.cardHeaderClosed}
                    onClick={() => setMis((prev) => !prev)}
                >
                    <h3>Miscellaneous</h3>
                </button>

            </div>

            <div className={styles.lecturesBox}>

                <div className={isTherms ? styles.card : styles.hidden}>
                    <div className={isTherms ? styles.cardContent : styles.folded}>
                        <Therms isTherms={isTherms} />
                    </div>
                </div>


                <div className={isGit ? styles.card : styles.hidden}>
                    <div className={isGit ? styles.cardContent : styles.folded}>
                        <Git isGit={isGit} />
                    </div>
                </div>

                <div className={isMis ? styles.card : styles.hidden}>
                    <div className={isMis ? styles.cardContent : styles.folded}>
                        <Miscellaneous isMis={isMis} />
                    </div>
                </div>
            </div>


        </div >



    )
}

export default Conspectus