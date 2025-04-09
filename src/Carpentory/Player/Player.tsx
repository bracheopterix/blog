import styles from "./Player.module.scss"
import MusicContainer from "./MusicContainer";
import { useEffect, useState } from "react";

function Player() {

    const [isTrack1, setTrack1]=useState<boolean>(false);
    const [isTrack2, setTrack2]=useState<boolean>(false);
    const [isTrack3, setTrack3]=useState<boolean>(false);

    const [activeTrack,setActiveTrack]=useState<(()=>void)|undefined>(undefined);
    

    // on turning one on - other shoud go off.
    // Use effect with trigger? Every musicContainer knows only about their setTrack

    useEffect(()=>{

        // checking which is on last
        // turning off previous one
        console.log('ok');

    },[activeTrack])

    return (
        <>


            <div className={styles.mainContainer}>

                <h3>Player</h3>

                <MusicContainer

                />

                <MusicContainer
                />

                <MusicContainer
                />

            </div>
        </>
    )
}

export default Player;