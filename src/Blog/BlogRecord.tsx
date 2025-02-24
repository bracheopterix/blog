import { JSX } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'

type BlogRecordParams={
    date:number[],
    note:string,
    title:string,
    text:string,
}

function BlogRecord({date,note,title,text}:BlogRecordParams): JSX.Element {

    return (
        <div className={`${styles.record} ${defStyles.flexColumn}`}>

            <h2 id='recordHeader'>{title}</h2>

            <div className={`${styles.details} ${defStyles.flexRow}`}>

                <p id='date'>{`${date[0]}.${date[1]}.${date[2]}`}</p> <p>{note}</p>

            </div>
            <p id='recordText'>{text}</p>
        </div>
    )
}
export default BlogRecord;