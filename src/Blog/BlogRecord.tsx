import { JSX } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'
import { Code, Record } from './Blog'


type BlogRecordParams = {
    code: Code,
    note?: string,
    title: string,
    text: string,
    isReal: boolean,
    setEditRecordIsVisible?: (EditRecordIsVisible: boolean) => void,
    setEditRecordWindowTitle?: (editRecordWindowTitle: string) => void,
    setEditRecordSave?: (editRecordSave: Record) => void,
    setDeleteWarningVisible?: (deleteWarningIsVisible: boolean) => void,
    setDeleteCode?: (deleteCode: Code | undefined) => void,
}

function BlogRecord({ code, note, title, text, isReal, setEditRecordIsVisible, setEditRecordWindowTitle, setEditRecordSave, setDeleteWarningVisible, setDeleteCode }: BlogRecordParams): JSX.Element {



    function editOnClick() {
        if (setEditRecordWindowTitle && setEditRecordIsVisible && setEditRecordSave) {
            setEditRecordWindowTitle("edit");
            setEditRecordIsVisible(true);
            localStorage.setItem("editRecordIsVisible", "true");
            const newRecord: Record = { "code": code, "note": note, "title": title, "text": text };
            setEditRecordSave(newRecord);
        }
        else {
            throw new Error("setEditRecordWindowTitle or setEditRecordIsVisible or setEditRecordSave is absent")
        }

    }

    function binOnClick() {
        if (setDeleteWarningVisible && setDeleteCode) {
            setDeleteWarningVisible(true);
            setDeleteCode(code);
        }
        else {
            throw new Error("setDeleteWarningVisible or setDeleteCode is absent")
        }

    }


    return (
        <div className={`${styles.record} ${defStyles.flexColumn}`} tabIndex={0}>

            <div className={`${styles.editPanel} ${defStyles.flexRow}`}>
                {isReal && (<div className={`${styles.button} ${styles.edit}`} onClick={editOnClick} tabIndex={0}></div>) }
                {isReal && (<div className={`${styles.button} ${styles.bin}`} onClick={binOnClick} tabIndex={0}></div>)}


            </div>

            <h2 id='recordHeader'>{title}</h2>

            <div className={`${styles.details} ${defStyles.flexRow}`}>

                <p id='date'>{`${code.day.toString().padStart(2, "0")}.${code.month.toString().padStart(2, "0")}.${code.year}`}</p> <p>{note}</p>

            </div>
            <p id='recordText'>{text}</p>
        </div>
    )
}



export default BlogRecord;