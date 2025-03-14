
import { JSX,useRef,useEffect } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'

type AddRecordWindowProps = {
    addRecordIsVisible: boolean,
    setAddRecordIsVisible: (addRecordIsVisible: boolean) => void,
}

function AddRecordWindow({ addRecordIsVisible, setAddRecordIsVisible: setAddRecordVisible }: AddRecordWindowProps): JSX.Element {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);  


    function closeOnClick() {
        setAddRecordVisible(false);
    }

    function saveSize(){
        if (textareaRef.current) {
            localStorage.setItem("textareaWidth", textareaRef.current.offsetWidth.toString());
            localStorage.setItem("textareaHeight", textareaRef.current.offsetHeight.toString());
          }
    }

    useEffect(() => {
        const savedWidth = localStorage.getItem("textareaWidth");
        const savedHeight = localStorage.getItem("textareaHeight");
      
        if (textareaRef.current) {
          if (savedWidth) textareaRef.current.style.width = `${savedWidth}px`;
          if (savedHeight) textareaRef.current.style.height = `${savedHeight}px`;
        }
      }, []);


    return (
        <>
            <div className={`${addRecordIsVisible ? styles.popUp : defStyles.hidden}  ${defStyles.flexColumn}`}>
                <div className={styles.popUpCloseButton} onClick={closeOnClick}></div>
                <h3>Add record to the blog</h3>

                <form className={defStyles.flexColumn}>
                    <input id="title" className = {styles.title} placeholder="Title"></input>

                    <input id="note" placeholder="Note"></input>

                    <textarea ref={textareaRef} onMouseUp={saveSize} placeholder="Text goes here..."></textarea>

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