import { useState } from "react";
import styles from "./Player.module.scss"


function MusicContainer() {

    const [isPlaying, setPlaying] = useState<boolean>(false)

    return (
        <div className={styles.musicContainer}>
            <div className={styles.buttonHolder}>
                <button className={isPlaying ? styles.pauseButton : styles.playButton} onClick={() => setPlaying((prev) => !prev)}></button>
            </div>
            <div className={isPlaying ? styles.trackerOn : styles.tracker}>
                <span>10. </span>
                <span>Track Name</span>
            </div>

        </div>
    )
}

export default MusicContainer;