import styles from './Blog.module.css'
import defStyles from './Sertar.module.css'

import { diary, DiaryRecord } from './InjectDiary';

import BlogRecord from './BlogRecord';
// import { useEffect } from 'react';



function Blog() {

// localStorage.setItem("diary",JSON.stringify(diary));



// for (let i=0;i<diary.length;i++){
//     localStorage.setItem(i.toString(),JSON.stringify(diary[i]));
// }




    return (<>
        <div className={`${styles.blog} ${defStyles.flexColumn}`}>

            

            {
            
            diary.map((record: DiaryRecord, index: number) => (

                <BlogRecord
                    key={index}
                    date={record.date}
                    note={record.note}
                    title={record.title}
                    text={record.text}
                />
            )
            )
            
            }

            <div className={defStyles.blockFooter}></div>

        </div>

    </>)
}

export default Blog;