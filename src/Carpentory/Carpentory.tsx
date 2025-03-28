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

                <div className={styles.card}>
                    <form id="testInput" className={styles.testForm} onSubmit={(event) => event.preventDefault()}>
                        <label id="testInput">
                            <h3>Test input</h3></label>
                        <input id="testInput" className={styles.testInput} type="text" placeholder="input here..."></input>
                        <button id="testInput" > Submit</button>
                    </form>
                </div>


                <div className={styles.card}>
                    <form id="niceForm" className={styles.buttonGallery}>
                        <h3>Nice input</h3>

                        <div id="niceForm" className={styles.niceInput}>
                            <input id="niceForm" placeholder="Text"></input>
                        </div>
                        <div id="niceForm" tabIndex={0} className={styles.onceButton}>
                            <p>Submit</p>
                        </div>
                        <div id="niceForm" tabIndex={0} className={styles.twiceButton}>
                            <div className={styles.inner}>
                                <p>Hold</p>
                                <div className={styles.background}>

                                </div>
                            </div>
                        </div>
                    </form>


                </div>

                <div className={styles.card}>
                    <div className={styles.bandCampHolder}>
                        <h3>Embedded</h3>
                        <p> Gives too many warnings
                            <br />
                            so for now is detached.
                        </p>
                        {/* <iframe style={{ border: 0, width: "100%", height: "42px" }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=3178444248/size=small/bgcol=ffffff/linkcol=e99708/track=3584292138/transparent=true/" seamless>
                        <a href="https://arsenylitvin.bandcamp.com/album/pmr-91-pk-2025-the-ominous-sounds-of-jupiter">The Ominous Sounds Of Jupiter</a>
                    </iframe> */}

                        {/* <iframe width="100%" height="200px" src="https://www.youtube.com/embed/H5NZtbbiyKM?si=Xw-yoosMjhiMcbnF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe> */}

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



            </div>




        </>
    )
}

export default Carpentory;