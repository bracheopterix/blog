
import { JSX } from "react";
import styles from "./AddRecord.module.css";
import defStyles from './Sertar.module.css';

type AddRecordProps = {
    addRecordVisible: boolean,
    setAddRecordVisible: () => void,
}

function AddRecord(): JSX.Element {
    return (
        <>
            <div className={styles.popUp}></div>
        </>
    )
}

export default AddRecord