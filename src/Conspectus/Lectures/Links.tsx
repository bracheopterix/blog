import styles from "./Lectures.module.scss"

type LinksProps = {
    isLinks: boolean,
}

function Links({isLinks}:LinksProps) {

    return (<>
<div className={isLinks ? styles.lectures : styles.hidden}>
<a href="https://tanstack.com/start/latest" target="_blank">Tanstack</a>

</div>

    </>)
}
export default Links