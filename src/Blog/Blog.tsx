import styles from './Blog.module.css';
import defStyles from './Sertar.module.css';

import { diary } from './InjectDiary';

import BlogRecord from './BlogRecord';
import { useEffect, useState } from 'react';
import AddRecordWindow from './AddRecordWindow'
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

    const [addRecordIsVisible, setAddRecordIsVisible] = useState<boolean>(false);


    /// FIRST LOAD ///

    useEffect(() => {

        let tempLocStorCast: string | null = localStorage.getItem("diary");
        if (tempLocStorCast) {
            let parsedDiary: Record[] = JSON.parse(tempLocStorCast);

            setDiaryTwin([...parsedDiary].reverse());
        }

        // loading visibility of the addRecordWindow //
        const storedAddRecordIsVisible = localStorage.getItem("addRecordIsVisible");
        setAddRecordIsVisible(storedAddRecordIsVisible ? JSON.parse(storedAddRecordIsVisible) : false);
    }, [refreshed])






    console.log(diaryTwin);


    function openAddRecordWindow() {
        // setting visibility of the addRecordWindow //
        setAddRecordIsVisible(true);
        // saving visibility of the addRecordWindow //
        localStorage.setItem("addRecordIsVisible", "true");
    }


    return (<>
        <AddRecordWindow
            addRecordIsVisible={addRecordIsVisible}
            setAddRecordIsVisible={setAddRecordIsVisible}
            setRefershed = {setRefershed}

        />

        <div className={`${styles.blog} ${defStyles.flexColumn}`}>

            <div className={`${styles.blogButton} ${styles.addRecordButton} ${styles.addRecordBGray}`}></div>
            <div className={`${styles.blogButton} ${styles.addRecordButton} ${styles.addRecordBTop}`} onClick={openAddRecordWindow}>
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
                    />
                ))

            }

            <div className={defStyles.blockFooter}></div>

        </div>

    </>)
}

export default Blog;