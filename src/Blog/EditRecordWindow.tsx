
import { JSX, useState, useRef, useEffect } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'
import { Code, Record } from './Blog'

type EditRecordWindowProps = {
    editRecordIsVisible: boolean,
    setEditRecordIsVisible: (editRecordIsVisible: boolean) => void,
    setRefershed: (refreshedFn: (prev: number) => number) => void,
    editRecordWindowMode: string,
    editRecordSave: Record | undefined,
}

function EditRecordWindow({ editRecordIsVisible: editRecordIsVisible, setEditRecordIsVisible: setEditRecordIsVisible, setRefershed, editRecordWindowMode, editRecordSave }: EditRecordWindowProps): JSX.Element {

    // checking if this an add or an edit window




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
        // if (editRecordWindowMode === "edit"&&titleRef.current) 
        // {
        //     titleRef.current.value = '';
        // }

        if (editRecordWindowMode === "edit") {
            if (titleRef.current) {
                titleRef.current.value = '';
            }
            if (noteRef.current?.value) { noteRef.current.value = ''; }
            if (textareaRef.current) {
                textareaRef.current.value = '';

            }

            localStorage.setItem("savedTitle", '');
            localStorage.setItem("savedNote", '');
            localStorage.setItem("savedText", '');
        }
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

        // checking mode //



    }, []);

    useEffect(() => {
        if (editRecordWindowMode === "edit") {

            if (titleRef.current && editRecordSave) {
                titleRef.current.value = editRecordSave.title;
            }
            if (noteRef.current && editRecordSave?.note) {
                noteRef.current.value = editRecordSave.note;
            }
            if (textareaRef.current && editRecordSave) {
                textareaRef.current.value = editRecordSave.text;
            }

        }
        if (editRecordWindowMode === "add") {
        }
    }, [editRecordSave])


    function submitRecord() {

        if (titleRef.current?.value && textareaRef.current?.value) {

            if (editRecordWindowMode === "add") {

                // checking today's date
                const newDate = new Date;
                // const day: number = newDate.getDay();
                // const month: number = newDate.getMonth();
                // const year: number = newDate.getFullYear();

                // creating record's code
                let newCode: Code = {
                    "day": newDate.getDate(),
                    "month": newDate.getMonth()+1,
                    "year": newDate.getFullYear(),
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
                        (record) => record.code.day === newCode.day && record.code.month === newCode.month && record.code.year === newCode.year
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

            }
            if (editRecordWindowMode === "edit") {

                const newRecord = {
                    code: editRecordSave?.code,
                    title: titleRef.current.value,
                    note: noteRef.current?.value,
                    text: textareaRef.current.value
                }

                const ghostDiary = localStorage.getItem("diary");
                if (ghostDiary) {
                    const parsedDiary = JSON.parse(ghostDiary);
                    parsedDiary.map((record: Record) => {
                        if (
                            record.code.day === newRecord.code?.day &&
                            record.code.month === newRecord.code?.month &&
                            record.code.year === newRecord.code?.year &&
                            record.code.order === newRecord.code?.order
                        ) {
                            record.title = newRecord.title;
                            record.note = newRecord.note;
                            record.text = newRecord.text;
                        };

                    })
                    localStorage.setItem("diary", JSON.stringify(parsedDiary));
                    setEditRecordIsVisible(false);
                    localStorage.setItem("editRecordIsVisible", "false");

                    titleRef.current.value = '';
                    if (noteRef.current) { noteRef.current.value = ''; }
                    textareaRef.current.value = '';

                    localStorage.setItem("savedTitle", '');
                    localStorage.setItem("savedNote", '');
                    localStorage.setItem("savedText", '');

                    setRefershed((prevRefreshed) => prevRefreshed + 1);
                    setErrorMessage(undefined);

                }

            }

        }
        else {
            //// MISTAKEEEE   ////

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
                <h3>{editRecordWindowMode}</h3>
                <form onSubmit={(event) => event.preventDefault()} className={defStyles.flexColumn}>

                    <input ref={titleRef} aria-label="title" id="title" onInput={saveTitle} className={styles.title} placeholder="Title" autoComplete="no"></input>

                    <input ref={noteRef} aria-label="note" id="note" onInput={saveNote} placeholder="Note" autoComplete="no"></input>

                    <textarea ref={textareaRef} aria-label="text" onInput={saveText} onMouseUp={saveSize} placeholder="Text goes here..." autoComplete="no"></textarea>

                    <p className={`${errorMessage ? styles.errorMessage : defStyles.hidden}`}>{errorMessage}</p>

                    <button onClick={submitRecord}>Save</button>
                </form>


            </div>
            {/* <div className={`${styles.popUpCurtain} ${editRecordIsVisible ? styles.popUpCurtainVisible : ''}`}></div> */}
        </>
    )
}

export default EditRecordWindow;