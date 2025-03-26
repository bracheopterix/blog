import { JSX } from "react"
import defstyles from "../Blog/Sertar.module.css"
import styles from "./Carpentory.module.css"


function Carpentory(): JSX.Element {

    styles ? console.log('styles on') : console.log('styles off');

    return (
        <>
            <h1> Carpentory </h1>

            <div className={styles.mainContainer}>
                <div className={`${styles.container} ${styles.adminPanel}`}>

                </div>

                <div className={`${styles.container} ${styles.x1}`}>1</div>
                <div className={`${styles.container} ${styles.x2}`}>2</div>


                <iframe className={`${styles.container} ${styles.player}`} style={{border: 0, width: "fit-content", height: "42px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1106907556/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"><a href="https://sigiloftime.bandcamp.com/album/half-of-the-circle">Half of The Circle by Sigil Of Time</a></iframe>
                <div className={`${styles.container} ${styles.x3}`}>3</div>

            </div>

        </>
    )
}

export default Carpentory;