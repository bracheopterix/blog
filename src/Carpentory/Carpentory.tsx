import { JSX } from "react"
// import defstyles from "../Blog/Sertar.module.css";
// import styles from "./Carpentory.module.css";

import styles from "./Carpentory.module.scss";


function Carpentory(): JSX.Element {


    return (
        <>

            <div className={styles.subHeader}>
                <h2> Carpentory </h2>
                <p className={styles.undertext}>the land of unknown</p>
            </div>

            <div className={styles.mainContainer}>

                <div className={styles.card}>
                    <div className={styles.adminPanel}>
                        <h3>Admin Panel</h3>
                        <div className={styles.check}>
                            <div className={`${styles ? styles.on : ""} ${styles.lamp}`}></div>
                            <div className={styles.label}>Styles loaded</div>
                        </div>
                        <div className={styles.check}>
                            <div className={`${styles.lamp}`}></div>
                            <div className={styles.label}>I do have a job</div>
                        </div>
                    </div>
                </div>


                <div className={styles.card}> No2</div>
                <div className={styles.card}> No3</div>
                <div className={styles.card}> No1</div>
                <div className={styles.card}> No2</div>
                <div className={styles.card}> No3</div>
                <div className={styles.card}> No1</div>
                <div className={styles.card}> No2</div>
                <div className={styles.card}> No3</div>
                <div className={styles.card}> No1</div>
                <div className={styles.card}> No2</div>
                <div className={styles.card}> No3</div>
                <div className={styles.card}> No1</div>
                <div className={styles.card}> No2</div>
                <div className={styles.card}> No3</div>
                <div className={styles.card}> No1</div>
                <div className={styles.card}> No2</div>
                <div className={styles.card}> No3</div>
                <div className={styles.card}> No1</div>
                <div className={styles.card}> No2</div>
                <div className={styles.card}> No3</div>
                <div className={styles.card}> No1</div>



            </div>




        </>
    )
}

export default Carpentory;