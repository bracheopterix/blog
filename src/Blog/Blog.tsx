import styles from './Blog.module.css';
import defStyles from './Sertar.module.css';

// import loadedDiary from './diary.json'

import BlogRecord from './BlogRecord';
import { useEffect, useState } from 'react';
import EditRecordWindow from './EditRecordWindow'
// import { useEffect } from 'react';

export type Code = {
    day: number,
    month: number,
    year: number,
    order: number,
}

export type Record = {
    code: Code,
    note?: string,
    title: string,
    text: string,
};



function Blog() {


    /// INJECT DEFAULT DIARY ///
    // localStorage.setItem("diary",JSON.stringify(loadedDiary));

    // function loadDiaryFromBackUp (){
    //     const diaryCheck = localStorage.getItem("diary");
    //     if(!diary){
    //         localStorage.setItem("diary",JSON.stringify(loadedDiary));
    //     }
    //     else{
    //         // for every existing record check analogue
    //         // try to inject records in the right order by dates
    //         // it is hard, you know.
    //     }
    // }



    /// STATES ///

    const [diaryTwin, setDiaryTwin] = useState<Record[]>([]);
    const [firstMessage, setFirstMessage] = useState<boolean>(false);
    const [refreshed, setRefreshed] = useState<boolean>(true);

    const [editRecordIsVisible, setEditRecordIsVisible] = useState<boolean>(false);
    const [deleteWarningIsVisible, setDeleteWarningVisible] = useState<boolean>(false);

    const [editRecordWindowMode, setEditRecordWindowTitle] = useState<string>('edit');

    const [editRecordSave, setEditRecordSave] = useState<Record | undefined>(undefined);

    const [deleteCode, setDeleteCode] = useState<Code | undefined>(undefined)
    // const deleteCodeRef = useRef<Code|undefined>(undefined);

    /// FIRST LOAD ///

    useEffect(() => {

        let tempLocStorCast: string | null = localStorage.getItem("diary");
        let parsedDiary: Record[] = []
        if (!tempLocStorCast) {
            setFirstMessage(true);

        }
        else {
            parsedDiary = JSON.parse(tempLocStorCast);

            if (parsedDiary.length === 0) {
                setFirstMessage(true);
            }
            else {
                setDiaryTwin([...parsedDiary].reverse());
            }
            // console.log("Diary content", tempLocStorCast);
        }


        // loading visibility of the editRecordWindow //
        const storedEditRecordIsVisible = localStorage.getItem("editRecordIsVisible");
        setEditRecordIsVisible(storedEditRecordIsVisible ? JSON.parse(storedEditRecordIsVisible) : false);


        return () => {
            // Cleaning up if blog unmounts
            setDiaryTwin([]);
            setFirstMessage(false);
        }

    }, [refreshed])

    useEffect(() => {
        if (deleteWarningIsVisible || editRecordIsVisible) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }


    }, [deleteWarningIsVisible, editRecordIsVisible])

    function refreshBlogRecords(){
        setRefreshed((prev)=>!prev);
    }

    function openEditRecordWindow() {
        // setting visibility of the editRecordWindow //
        setEditRecordIsVisible(true);
        // saving visibility of the editRecordWindow //
        setEditRecordWindowTitle("add");
        localStorage.setItem("editRecordIsVisible", "true");
    }



    function onClickDeleteRecordYes() {
        if (deleteCode) {
            deleteRecord(deleteCode);
            setDeleteWarningVisible(false);
        }
    }

    function closeEditRecordWindow() {
        setDeleteWarningVisible(false);
        refreshBlogRecords()    }

    function deleteRecord(code: Code) {
        const updatedDiary = diaryTwin.filter((record) => record.code !== code);
        // console.log(updatedDiary);
        localStorage.setItem("diary", JSON.stringify(updatedDiary.reverse()));
        refreshBlogRecords()
        }

    function curtainOnClick() {

        // Close pop up on click on curtain logic. Do I need this?

        // setDeleteWarningVisible(false);
        // localStorage.setItem("deleteWarningIsVisible","false");
        // setEditRecordIsVisible(false);
        // localStorage.setItem("editRecordIsVisible","false");

        // if(editRecordWindowMode ==="edit") {


        //             localStorage.setItem("savedTitle", '');
        //             localStorage.setItem("savedNote", '');
        //             localStorage.setItem("savedText", '');
        // }
    };

    function diaryDownload() {
        const loadedDiary = localStorage.getItem("diary");
        if (!loadedDiary) {
            throw new Error("there is nothing to download");
        }
        else {

            const blob = new Blob([loadedDiary], { type: "application/json" });
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobUrl;


            a.download = `diary`;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(blobUrl);
        }

    }



    return (<>

        {/* PopUp black curtain */}

        <div className={`${styles.popUpCurtain} ${editRecordIsVisible ? styles.popUpCurtainVisible : ''}`} onClick={curtainOnClick}></div>

        {/* // */}

        <EditRecordWindow
            editRecordIsVisible={editRecordIsVisible}
            setEditRecordIsVisible={setEditRecordIsVisible}
            refreshBlogRecords={refreshBlogRecords}
            editRecordWindowMode={editRecordWindowMode}
            editRecordSave={editRecordSave}
        />

        {/* DELETE STOP POP UP */}

        <div className={`${deleteWarningIsVisible ? styles.deleteWarning : defStyles.hidden} ${styles.popUp} ${defStyles.flexColumn} `}>
            <p>Do you really want to delete this record?</p>
            <div className={`${styles.buttonHolder}`}>
                <button onClick={onClickDeleteRecordYes} onSubmit={(event) => event.preventDefault()}>Yes</button>
                <button onClick={closeEditRecordWindow} onSubmit={(event) => event.preventDefault()}>No</button>
            </div>
        </div>


        <div className={`${styles.blog} ${defStyles.flexColumn}`}>

            {/* Big buttons container */}
            <div className={`${styles.blogButtons}`}>


                <div className={styles.blogButton}>
                    <div className={`${styles.blogButtonInner} ${styles.border}`}></div>
                    <div className={`${styles.blogButtonInner} ${styles.buttonIcon} ${styles.addRecord}`} onClick={openEditRecordWindow} tabIndex={0}></div>
                    <div className={`${styles.blogButtonInner} ${styles.background}`}></div>
                    {/* clue on hover */}
                    <p className={styles.clue}>Add record</p>
                </div>

                {/* <div className={styles.blogButton}>
                    <div className={`${styles.blogButtonInner} ${styles.border}`}></div>
                    <div className={`${styles.blogButtonInner} ${styles.buttonIcon} ${styles.reverseRecords}`} onClick={reverse}></div>
                    <div className={`${styles.blogButtonInner} ${styles.background}`}></div>
                    <p className={styles.clue}>Reverse records</p>
                </div> */}

                <div className={styles.blogButton}>
                    <div className={`${styles.blogButtonInner} ${styles.border}`}></div>
                    <div className={`${styles.blogButtonInner} ${styles.buttonIcon} ${styles.downloadRecords}`} onClick={diaryDownload} tabIndex={0}></div>
                    <div className={`${styles.blogButtonInner} ${styles.background}`}></div>
                    {/* clue on hover */}
                    <p className={styles.clue}>Download records</p>
                </div>

                {/* Add record */}
                {/* <div className={styles.addRecordButton}>
                    <div className={`${styles.blogButton}  ${styles.addRecordBGray}`}></div>
                    <div className={`${styles.blogButton}  ${styles.addRecordBTop}`} onClick={openEditRecordWindow}>
                        // clue on hover
                        <p className={styles.clue}>Add record</p>
                    </div>
                </div> */}


                {/* Reverse records */}

                {/* Download records */}


            </div>


            {/* All records map */}

            {firstMessage && (<BlogRecord
                code={{ "day": 0, "month": 0, "year": 0, "order": 0 }}
                note={"Nice day for fishing, ain't it? Ha-ha!"}
                title={"There is no records yet"}
                text={"Now you can create one by yourself using the menu to the right"}
                isReal={false}
            />)}

            {
                diaryTwin.map((record: Record, index: number) => (
                    <BlogRecord
                        key={index}
                        code={record.code}
                        note={record.note}
                        title={record.title}
                        text={record.text}
                        isReal={true}
                        setDeleteWarningVisible={setDeleteWarningVisible}
                        setEditRecordIsVisible={setEditRecordIsVisible}
                        setEditRecordWindowTitle={setEditRecordWindowTitle}
                        setEditRecordSave={setEditRecordSave}
                        setDeleteCode={setDeleteCode}
                    />
                ))

            }

            {/* Decorative */}

            <div className={defStyles.blockFooter}></div>
            <div className={defStyles.blockFooterSpace}></div>


        </div>

    </>)
}

export default Blog;