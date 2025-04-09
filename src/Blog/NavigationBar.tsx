import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css'


function NavigationBar() {

    function renderLink(to: string, label: string) {
        return (
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? `${styles.headerLink} ${styles.headerLinkActive}` : styles.headerLink}
            >
                {label}
            </NavLink>
        )
    }

    return (
        <div id='Navbar' className={styles.mainContainer}>

            <div className={styles.headerDummy}></div>

            {renderLink("/main","Main")}
            {renderLink("/blog","Blog")}
            {renderLink("/games","Games")}
            {renderLink("/conspectus","Conspectus")}

            <div className={styles.headerDummy}></div>
        </div>
    )

}

export default NavigationBar;