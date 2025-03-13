import styles from './Blog.module.css';
import defStyles from './Sertar.module.css';

import { diary } from './InjectDiary';

import BlogRecord from './BlogRecord';
import { useEffect, useState, useRef } from 'react';
import AddRecord from './AddRecord';
// import { useEffect } from 'react';



function Blog() {

    type Code = {
        day:number,
        month:number,
        year:number,
        order:number,
    }

    type Record = {
        code: Code,
        note: string,
        title:string,
        text:string,
    };


    /// INJECT DEFAULT DIARY ///
    // localStorage.setItem("diary",JSON.stringify(diary));

    /// STATES ///

    const [diaryTwin, setDiaryTwin] = useState<Record[]>([]);
    const [addRecordVisible, setAddRecordVisible] = useState<boolean>(false);

    // let diaryGhost = useRef<Record[]>([]);

    /// FIRST LOAD ///

    useEffect(() => {
        
        let tempLocStorCast:string|null = localStorage.getItem("diary");
        if(tempLocStorCast){
            let parsedDiary:Record[]=JSON.parse(tempLocStorCast);

            setDiaryTwin([...parsedDiary].reverse());
            // diaryGhost.current = JSON.parse(tempLocStorCast);
        }

        // console.log(diaryGhost.current);

    }, [])

    ///



    console.log(diaryTwin);

    


    return (<>
        <div className={`${styles.blog} ${defStyles.flexColumn}`}>

            <div className={`${styles.blogButton} ${styles.addRecordButton} ${styles.addRecordBGray}`}></div>
            <div className={`${styles.blogButton} ${styles.addRecordButton} ${styles.addRecordBTop}`}>
                <p className={styles.clue}>Add record</p>

            </div>

            <div className={`${styles.blogButton} ${styles.reverseRecordsButton} ${styles.reverseRecordsBGray}`}></div>
            <div className={`${styles.blogButton} ${styles.reverseRecordsButton} ${styles.reverseRecordsBTop}`} >
                <p className={styles.clue}>Reverse direction</p>
            </div>

            <div className={styles.addRecord}></div>

            <AddRecord
            addRecordVisible = {addRecordVisible}
            setAddRecordVisible = {setAddRecordVisible}
            />

            {
                
                diaryTwin.map((record:Record,index:number)=>(
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