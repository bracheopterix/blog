import { JSX } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'
import { Code, Record } from './Blog'


type BlogRecordParams = {
    // index: number,
    code: Code,
    note?: string,
    title: string,
    text: string,
    deleteRecord: (code: Code) => void,
    setEditRecordIsVisible: (EditRecordIsVisible: boolean) => void,
    setEditRecordWindowTitle: (editRecordWindowTitle: string) => void,
    setEditRecordSave: (editRecordSave: Record) => void,
    setDeleteWarningVisible: (isDeleteWarningVisible: boolean) => void,
    setDeleteCode: (deleteCode: Code | undefined)=> void,
}

function BlogRecord({ code, note, title, text, deleteRecord, setEditRecordIsVisible, setEditRecordWindowTitle, setEditRecordSave, setDeleteWarningVisible, setDeleteCode }: BlogRecordParams): JSX.Element {



    function editOnClick() {
        setEditRecordWindowTitle("edit");
        setEditRecordIsVisible(true);
        localStorage.setItem("editRecordIsVisible", "true");
        const newRecord: Record = { "code": code, "note": note, "title": title, "text": text };
        setEditRecordSave(newRecord);
    }

    function binOnClick() {
        setDeleteWarningVisible(true);
        setDeleteCode(code);
        // deleteRecord(code);
    }


    return (
        <div className={`${styles.record} ${defStyles.flexColumn}`}>

            <div className={`${styles.editPanel} ${defStyles.flexRow}`}>
                <div className={`${styles.button} ${styles.edit}`} onClick={editOnClick}></div>
                <div className={`${styles.button} ${styles.bin}`} onClick={binOnClick}></div>


            </div>

            <h2 id='recordHeader'>{title}</h2>

            <div className={`${styles.details} ${defStyles.flexRow}`}>

                <p id='date'>{`${code.day.toString().padStart(2, "0")}.${code.month.toString().padStart(2, "0")}.${code.year}`}</p> <p>{note}</p>

            </div>
            <p id='recordText'>{text}</p>
        </div>
    )
}


//POPUP DO you really want to delete a record?
//button for redacting your message
//add clue to the Monkey-do game

export default BlogRecord;