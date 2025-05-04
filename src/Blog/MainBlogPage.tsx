
import { NavLink } from "react-router-dom";
import styles from './MainBlogPage.module.css'

function MainBlogPage() {


    return (<>
        <img src={`${new URL("../assets/curious-yato-san.png", import.meta.url).href}`} className={styles.yatoSan}></img>
        {/* <h2 className={styles.announcement}> Here is yet.... n0thing</h2> */}

        <div className={styles.announcement}>

        <h3>
            Here is yet.... n
            <NavLink to="../carpentory/" className={styles.pseudo}>
            0
            </NavLink>
            thing
            </h3>
            <div className={styles.links}>

                {/* Pages */}
                <a className={styles.tanStack} href="https://bracheopterix.github.io/blog/" target="_blank">
                <img src={`${new URL("../assets/icons/linksIcons/MyPages-logo.svg", import.meta.url).href}`}></img>
                <p className={styles.tanStackClue}>github pages</p>
                </a>

                {/* GitHub */}
                <a className={styles.tanStack} href="https://www.github.com" target="_blank">
                <img src={`${new URL("../assets/icons/linksIcons/Github-logo.svg", import.meta.url).href}`}></img>
                <p className={styles.tanStackClue}>код</p>
                </a>

                {/* Notion */}
                <a className={styles.tanStack} href="https://www.notion.so" target="_blank">
                <img src={`${new URL("../assets/icons/linksIcons/Notion-logo.svg", import.meta.url).href}`}></img>
                <p className={styles.tanStackClue}>конспекты</p>
                </a>

                {/* LeetCode */}
                <a className={styles.tanStack} href="https://leetcode.com" target="_blank">
                <img src={`${new URL("../assets/icons/linksIcons/Leetcode-logo.svg", import.meta.url).href}`}></img>
                <p className={styles.tanStackClue}>задачки</p>
                </a>

                {/* ChatGPT*/}
                <a className={styles.tanStack} href="https://chatgpt.com/c" target="_blank">
                <img src={`${new URL("../assets/icons/linksIcons/ChatGPT-logo.svg", import.meta.url).href}`}></img>
                <p className={styles.tanStackClue}>Магистр</p>
                </a>


                

                

            </div>
            </div>
        

    </>
    )

}

export default MainBlogPage;