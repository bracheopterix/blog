import styles from './Header.module.css'


function MainHeader(){



    return (
    <div id='Navbar' className = {styles.mainContainer}>
        <div className={styles.headerDummy}></div>
        <div className={styles.headerLink}>Main</div>
        <div className={styles.headerLink}>Blog</div>
        <div className={styles.headerLink}>Games</div>
        <div className={styles.headerDummy}></div>
    </div>
    )

}

export default MainHeader;