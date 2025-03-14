
import { JSX, useRef, useEffect } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'

type AddRecordWindowProps = {
    addRecordIsVisible: boolean,
    setAddRecordIsVisible: (addRecordIsVisible: boolean) => void,
}

function AddRecordWindow({ addRecordIsVisible, setAddRecordIsVisible: setAddRecordVisible }: AddRecordWindowProps): JSX.Element {


    /// SAVING VALUES /// 

    const titleRef = useRef<HTMLInputElement | null>(null);
    const noteRef = useRef<HTMLInputElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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

    function saveText () {
        if (recordTimeoutRef) { clearTimeout(recordTimeoutRef.current) }
        recordTimeoutRef.current = setTimeout(() => {
            localStorage.setItem("savedText", JSON.stringify(textareaRef.current?.value));
        }, 200)
    }


    /// FUNCTIONAL ///

    function closeOnClick() {
        setAddRecordVisible(false);
        localStorage.setItem("addRecordIsVisible", "false");
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


    }, []);

    

    return (
        <>
            <div className={`${addRecordIsVisible ? styles.popUp : defStyles.hidden}  ${defStyles.flexColumn}`}>
                <div className={styles.popUpCloseButton} onClick={closeOnClick}></div>
                <h3>Add record to the blog</h3>

                <form className={defStyles.flexColumn}>
                    <input ref={titleRef} id="title" onInput={saveTitle} className={styles.title} placeholder="Title"></input>

                    <input ref={noteRef} id="note" onInput={saveNote} placeholder="Note"></input>

                    <textarea ref={textareaRef} onInput = {saveText} onMouseUp={saveSize} placeholder="Text goes here..."></textarea>

                </form>

                {/* the value from the inputs should be saved in the Ref variables, to save them from loosing when the page is refreshing
It's where debounce wins
Also, on submit the values are refreshed.

Magister knew how to save textarea size after it is changed by hand. Already asked - look for it
*/}


            </div>
            <div className={`${styles.popUpCurtain} ${addRecordIsVisible ? styles.popUpCurtainVisible : ''}`}></div>
        </>
    )
}

export default AddRecordWindow;