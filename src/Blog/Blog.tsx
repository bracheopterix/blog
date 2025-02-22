import styles from './Blog.module.css'
import defStyles from './Sertar.module.css'



function Blog() {

    return (<>
        <div className={`${styles.blog} ${defStyles.flexColumn}`}>

            <div className={`${styles.record} ${defStyles.flexColumn}`}>
                <h2 id='recordHeader'>Hello, have a nice day!</h2>
                <div className={`${styles.details} ${defStyles.flexRow}`}>
                    <p id='date'>22.02.25</p> <p id='author'>Olga</p>
                </div>
                <p id='recordText'>This is a testing site, made for playing around!</p>
            </div>

            <div className={`${styles.record} ${defStyles.flexColumn}`}>
                <h2 id='recordHeader'>In terms of games</h2>
                <div className={`${styles.details} ${defStyles.flexRow}`}>
                    <p id='date'>18.02.25</p> <p id='author'>Olga</p>
                </div>
                <p id='recordText'>
                    Today I finished both games. I look forward to add them to the site.
                    Even if the second one is a bit harsh. Here I am also testng text wrapping
                    so don't be scared if the text suddenly goes brrr...
                </p>
            </div>

            <div className={styles.footer}></div>

        </div>

    </>)
}

export default Blog;