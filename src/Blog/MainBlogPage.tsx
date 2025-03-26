
import { NavLink } from "react-router-dom";
import styles from './MainBlogPage.module.css'

function MainBlogPage() {


    return (<>
        <img src='../src/assets/curious-yato-san.png' className={styles.yatoSan}></img>
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