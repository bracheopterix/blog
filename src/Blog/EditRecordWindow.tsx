
import { JSX, useState, useRef, useEffect } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'
import { Code, Record } from './Blog'

type EditRecordWindowProps = {
    editRecordIsVisible: boolean,
    setEditRecordIsVisible: (editRecordIsVisible: boolean) => void,
    setRefershed: (refreshed: number) => void,
    editRecordWindowTitle: string,
}

function EditRecordWindow({ editRecordIsVisible: editRecordIsVisible, setEditRecordIsVisible: setEditRecordIsVisible, setRefershed, editRecordWindowTitle }: EditRecordWindowProps): JSX.Element {

    // checking if this an add or an edit window
    let windowTitle = '';


    

    /// SAVING VALUES /// 

    const titleRef = useRef<HTMLInputElement | null>(null);
    const noteRef = useRef<HTMLInputElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const recordTimeoutRef = useRef(0);

    function saveTitle() {
        if (recordTimeoutRef) { clearTimeout(recordTimeoutRef.current) }
        recordTimeoutRef.current = setTimeout(() => {
            localStorage.setItem("savedTitle", JSON.stringify(titleRef.current?.value));
        }, 200)
    }

    function saveNote() {
        if (recordTimeoutRef) { clearTimeout(recordTimeoutRef.current) }
        recordTimeoutRef.current = setTimeout(() => {
            localStorage.setItem("savedNote", JSON.stringify(noteRef.current?.value));
        }, 200)
    }

    function saveText() {
        if (recordTimeoutRef) { clearTimeout(recordTimeoutRef.current) }
        recordTimeoutRef.current = setTimeout(() => {
            localStorage.setItem("savedText", JSON.stringify(textareaRef.current?.value));
        }, 200)
    }


    /// FUNCTIONAL ///

    function closeOnClick() {
        setEditRecordIsVisible(false);
        localStorage.setItem("editRecordIsVisible", "false");
    }

    /// Saving text area size ///
    function saveSize() {

        if (textareaRef.current) {
            localStorage.setItem("textareaWidth", textareaRef.current.offsetWidth.toString());
            localStorage.setItem("textareaHeight", textareaRef.current.offsetHeight.toString());
        }
    }

    /// FIRST LOAD ///

    useEffect(() => {
        // loading text area size //
        const savedWidth = localStorage.getItem("textareaWidth");
        const savedHeight = localStorage.getItem("textareaHeight");

        if (textareaRef.current) {
            if (savedWidth) { textareaRef.current.style.width = `${savedWidth}px` };
            if (savedHeight) { textareaRef.current.style.height = `${savedHeight}px` };
        }

        // loading input values //
        const savedTitle = localStorage.getItem("savedTitle");
        if (savedTitle && titleRef.current) { titleRef.current.value = JSON.parse(savedTitle).toString() }

        const savedNote = localStorage.getItem("savedNote");
        if (savedNote && noteRef.current) { noteRef.current.value = JSON.parse(savedNote).toString() }

        const savedText = localStorage.getItem("savedText");
        if (savedText && textareaRef.current) { textareaRef.current.value = JSON.parse(savedText).toString() }

        //deciding functionality depending is it add or edit
        switch (editRecordWindowTitle) {
            case "add":
                windowTitle = "Add blog record";
                break;
            case "edit":
                windowTitle = "Edit blog record";

                // loadRecord();

                break;
            default:
                windowTitle = "Title error";
                break;
        }

    }, []);


    function submitRecord() {

        if (titleRef.current?.value && textareaRef.current?.value) {

            // checking today's date
            const newDate = new Date;
            const day: number = newDate.getDay();
            const month: number = newDate.getMonth();
            const year: number = newDate.getFullYear();

            // creating record's code
            const newCode: Code = {
                "day": day,
                "month": month,
                "year": year,
                "order": 0,
            }

            // checking latest order //
            const newRecord: Record = {
                title: titleRef.current?.value,
                note: noteRef.current?.value,
                text: textareaRef.current?.value,
                code: newCode,
            }

            // checking existing diary records 
            const diaryGhost = localStorage.getItem("diary");
            if (diaryGhost) {
                const castRecords: Record[] = JSON.parse(localStorage.getItem("diary") || "[]");
                // getting only same date records
                const sameDayRecords: Record[] = castRecords.filter(
                    (record) => record.code.day === day && record.code.month === month && record.code.year === year
                );

                if (sameDayRecords.length !== 0) {
                    // finding the record with the highest 'order' value
                    const latestOrder = sameDayRecords.reduce((max, record) => Math.max(max, record.code.order), 0);
                    newCode.order = latestOrder + 1;
                }

                castRecords.push(newRecord);
                localStorage.setItem("diary", JSON.stringify(castRecords));

            }
            else {
                localStorage.setItem("diary", JSON.stringify([newRecord]));
            }
            setEditRecordIsVisible(false);
            localStorage.setItem("editRecordIsVisible", "false");
            titleRef.current.value = '';
            if (noteRef.current) { noteRef.current.value = ''; }
            textareaRef.current.value = '';

            setRefershed((prevRefreshed) => prevRefreshed + 1);
            setErrorMessage(undefined);

            //// MISTAKEEEE   ////
        }
        else {
            setErrorMessage("please, enter title and text")
            throw new Error("please, enter title and text");
        }


    }

    // function loadRecord(){
    //     const diaryGhost = localStorage.getItem("diary");
    //     if(diaryGhost){
    //         const castRecords:Record[] = JSON.parse(diaryGhost);
    //         const loadedRecord = castRecords.filter((record)=>record.code=code)
    //         //// NEEDS CODE
    //     }

    // }


    return (
        <>
            <div className={`${editRecordIsVisible ? styles.popUp : defStyles.hidden}  ${defStyles.flexColumn}`}>
                <div className={styles.popUpCloseButton} onClick={closeOnClick}></div>
                <h3>{windowTitle}</h3>
                <form onSubmit={(event) => event.preventDefault()} className={defStyles.flexColumn}>

                    <input ref={titleRef} id="title" onInput={saveTitle} className={styles.title} placeholder="Title"></input>

                    <input ref={noteRef} id="note" onInput={saveNote} placeholder="Note"></input>

                    <textarea ref={textareaRef} onInput={saveText} onMouseUp={saveSize} placeholder="Text goes here..."></textarea>

                    <p className={`${errorMessage ? styles.errorMessage : defStyles.hidden}`}>{errorMessage}</p>

                    <button onClick={submitRecord}>Save</button>
                </form>



            </div>
            <div className={`${styles.popUpCurtain} ${editRecordIsVisible ? styles.popUpCurtainVisible : ''}`}></div>
        </>
    )
}

export default EditRecordWindow;