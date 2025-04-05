import Git from './Lectures/Git'
import styles from './Conspectus.module.scss'
import { useState } from 'react'


function Conspectus() {

    const [isGit, setGit] = useState<boolean>(false);


    return (

        <div className={styles.mainContainer}>

            <div className={styles.card}>
                <button id="gitButton"
                    className={isGit ? styles.cardHeaderOpen : styles.cardHeaderClosed}
                    onClick={() => setGit((prev) => !prev)}
                >
                    <h2>Git</h2>

                </button>
                <div className={isGit ? styles.cardContent : styles.folded}>
                    <Git isGit={isGit}/>
                </div>
            </div>

           

        </div >
    )
}

export default Conspectus