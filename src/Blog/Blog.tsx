import styles from './Blog.module.css';
import defStyles from './Sertar.module.css';

import { diary } from './InjectDiary';

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
    // localStorage.setItem("diary",JSON.stringify(diary));

    /// STATES ///

    const [diaryTwin, setDiaryTwin] = useState<Record[]>([]);
    const [refreshed, setRefershed] = useState<number>(0);

    const [editRecordIsVisible, setEditRecordIsVisible] = useState<boolean>(false);
    const [isDeleteWarningVisible, setDeleteWarningVisible] = useState<boolean>(false);

    const [editRecordWindowMode, setEditRecordWindowTitle] = useState<string>('edit');

    const [editRecordSave, setEditRecordSave] = useState<Record | undefined>(undefined);

    const [deleteCode, setDeleteCode] = useState<Code | undefined>(undefined)
    // const deleteCodeRef = useRef<Code|undefined>(undefined);

    /// FIRST LOAD ///

    useEffect(() => {

        let tempLocStorCast: string | null = localStorage.getItem("diary");
        if (tempLocStorCast) {
            let parsedDiary: Record[] = JSON.parse(tempLocStorCast);

            setDiaryTwin([...parsedDiary].reverse());
        }

        // loading visibility of the editRecordWindow //
        const storedEditRecordIsVisible = localStorage.getItem("editRecordIsVisible");
        setEditRecordIsVisible(storedEditRecordIsVisible ? JSON.parse(storedEditRecordIsVisible) : false);
    }, [refreshed])

    useEffect (()=>{

    },[isDeleteWarningVisible,editRecordIsVisible])


    console.log(diaryTwin);


    function openEditRecordWindow() {
        // setting visibility of the editRecordWindow //
        setEditRecordIsVisible(true);
        // saving visibility of the editRecordWindow //
        setEditRecordWindowTitle("add");
        localStorage.setItem("editRecordIsVisible", "true");
    }



    function onClickDeleteRecordYes() {
        console.log(deleteCode);
        if (deleteCode) {
            deleteRecord(deleteCode);
            console.log(deleteCode);
            setDeleteWarningVisible(false);
        }
        // setRefershed((refreshed)=>refreshed+1);
    }

    function closeEditRecordWindow() {
        setDeleteWarningVisible(false);
    }

    function deleteRecord(code: Code) {
        const updatedDiary = diaryTwin.filter((record) => record.code !== code);
        // console.log(updatedDiary);
        localStorage.setItem("diary", JSON.stringify(updatedDiary.reverse()));
        setRefershed((refreshed) => refreshed + 1);
    }

    return (<>

        <div className={`${styles.popUpCurtain} ${editRecordIsVisible ? styles.popUpCurtainVisible : ''}`}></div>


        <EditRecordWindow
            editRecordIsVisible={editRecordIsVisible}
            setEditRecordIsVisible={setEditRecordIsVisible}
            setRefershed={setRefershed}
            editRecordWindowMode={editRecordWindowMode}
            editRecordSave={editRecordSave}
        />


        <div className={`${isDeleteWarningVisible ? '' : defStyles.hidden} ${styles.popUp} ${styles.deleteWarning} ${defStyles.flexColumn} `}>
            <p>Do you really want to delete this record?</p>
            <div className={`${styles.buttonHolder}`}>
                <button onClick={onClickDeleteRecordYes} onSubmit={(event) => event.preventDefault()}>Yes</button>
                <button onClick={closeEditRecordWindow} onSubmit={(event) => event.preventDefault()}>No</button>
            </div>
        </div>

        <div className={`${styles.blog} ${defStyles.flexColumn}`}>

            <div className={`${styles.blogButton} ${styles.addRecordButton} ${styles.addRecordBGray}`}></div>
            <div className={`${styles.blogButton} ${styles.addRecordButton} ${styles.addRecordBTop}`} onClick={openEditRecordWindow}>
                <p className={styles.clue}>Add record</p>

            </div>


            {

                diaryTwin.map((record: Record, index: number) => (
                    <BlogRecord
                        key={index}
                        // index={index}
                        code={record.code}
                        note={record.note}
                        title={record.title}
                        text={record.text}
                        deleteRecord={deleteRecord}
                        setDeleteWarningVisible={setDeleteWarningVisible}
                        setEditRecordIsVisible={setEditRecordIsVisible}
                        setEditRecordWindowTitle={setEditRecordWindowTitle}
                        setEditRecordSave={setEditRecordSave}
                        setDeleteCode={setDeleteCode}
                    />
                ))

            }



            <div className={defStyles.blockFooter}></div>
            <div className={defStyles.blockFooterSpace}></div>


        </div>

    </>)
}

export default Blog;