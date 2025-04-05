import { NavLink } from 'react-router-dom';
import styles from './MainHeader.module.css'


function MainHeader() {



    return (
        <div id='Navbar' className={styles.mainContainer}>
            
            <div className={styles.headerDummy}></div>
            <NavLink to="/main" className={ ({isActive})=>isActive? `${styles.headerLink} ${styles.headerLinkActive}`:styles.headerLink}>
            Main
            </NavLink>
            <NavLink to="/blog" className={ ({isActive})=>isActive? `${styles.headerLink} ${styles.headerLinkActive}`:styles.headerLink}>
            Blog
            </NavLink>
            <NavLink to="/games/" className={ ({isActive})=>isActive? `${styles.headerLink} ${styles.headerLinkActive}`:styles.headerLink}>
            Games
            </NavLink>
            <NavLink to="/conspectus/" className={ ({isActive})=>isActive? `${styles.headerLink} ${styles.headerLinkActive}`:styles.headerLink}>
            Conspectus
            </NavLink>


            {/* <div className={styles.headerLink}>Games</div> */}
            
            {/* <div className={styles.headerLink}>
                <Link to="/games" className={styles.headerLink}>Games</Link>

            </div> */}
            <div className={styles.headerDummy}></div>
        </div>
    )

}

export default MainHeader;