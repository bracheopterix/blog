
import { NavLink } from "react-router-dom";
import styles from './MainBlogPage.module.css'

function MainBlogPage() {


    return (<>
        <img src={new URL("../src/assets/curious-yato-san.png", import.meta.url).href} className={styles.yatoSan}></img>
        {/* <h2 className={styles.announcement}> Here is yet.... n0thing</h2> */}

        <h2 className={styles.announcement}>
            Here is yet.... n
            <NavLink to="../carpentory/" className={styles.pseudo}>
            0
            </NavLink>
            thing
            </h2>

        

    </>
    )

}

export default MainBlogPage;