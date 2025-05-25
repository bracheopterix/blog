
import { NavLink } from "react-router-dom";
import styles from './MainBlogPage.module.css'

function MainBlogPage() {


    return (<>
        {/* YATO */}
        <img src={`${new URL("../assets/curious-yato-san.png", import.meta.url).href}`} className={styles.yatoSan}></img>
        {/* BIRB */}
        {/* <img src={`${new URL("../assets/bird.png", import.meta.url).href}`} className={styles.yatoSan}></img> */}
        {/* <h2 className={styles.announcement}> Here is yet.... n0thing</h2> */}

        <div className={styles.announcement}>

            <h3>
                Welcome to my personal web-p
                <NavLink to="../carpentory/" className={styles.pseudo}>
                    a
                </NavLink>
                ge
            </h3>
            <p className={styles.text}>
                <span>My name is Olga Zhukovski.</span>
                <span> Here you can find components I’ve worked on, like a blog page, some notes, and a few games.</span>
                <span> The page was built using React+Vite with CSS (and some SASS) and JavaScript (with some TypeScript).</span>
                <span> I am still working on it, adding new parts and improving old ones </span>
                <span> to achieve a consistent and pleasant experience for possible users.</span>
            </p>

            <div className={styles.links}>

                {/* Pages */}
                {/* <a className={styles.tanStack} href="https://bracheopterix.github.io/blog/" target="_blank">
                    <img src={`${new URL("../assets/icons/linksIcons/MyPages-logo.svg", import.meta.url).href}`}></img>
                    <p className={styles.tanStackClue}>github pages</p>
                </a> */}

                {/* My GitHub */}
                <a className={styles.tanStack} href="https://github.com/bracheopterix" target="_blank">
                    <img src={`${new URL("../assets/icons/linksIcons/Github-logo.svg", import.meta.url).href}`}></img>
                    <p className={styles.tanStackClue}>GitHub</p>
                </a>

                {/* My LinkedIn */}
                <a className={styles.tanStack} href="https://www.github.com" target="_blank">
                    <img src={`${new URL("../assets/icons/linksIcons/Linkedin-logo.svg", import.meta.url).href}`}></img>
                    <p className={styles.tanStackClue}>LinkedIn</p>
                </a>


                {/* Notion */}
                {/* <a className={styles.tanStack} href="https://www.notion.so" target="_blank">
                    <img src={`${new URL("../assets/icons/linksIcons/Notion-logo.svg", import.meta.url).href}`}></img>
                    <p className={styles.tanStackClue}>conspects</p>
                </a> */}

                {/* LeetCode */}
                {/* <a className={styles.tanStack} href="https://leetcode.com" target="_blank">
                    <img src={`${new URL("../assets/icons/linksIcons/Leetcode-logo.svg", import.meta.url).href}`}></img>
                    <p className={styles.tanStackClue}>exercises</p>
                </a> */}

                {/* ChatGPT*/}
                {/* <a className={styles.tanStack} href="https://chatgpt.com/c" target="_blank">
                    <img src={`${new URL("../assets/icons/linksIcons/ChatGPT-logo.svg", import.meta.url).href}`}></img>
                    <p className={styles.tanStackClue}>Magister</p>
                </a> */}






            </div>
        </div>


    </>
    )

}

export default MainBlogPage;