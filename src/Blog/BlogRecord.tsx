import { JSX } from "react";
import styles from './Blog.module.css';
import defStyles from './Sertar.module.css'
import {Code} from './Blog'


type BlogRecordParams = {
    // index: number,
    code: Code,
    note?: string,
    title: string,
    text: string,
}

function BlogRecord({ code, note, title, text }: BlogRecordParams): JSX.Element {




    return (
        <div className={`${styles.record} ${defStyles.flexColumn}`}>

            <h2 id='recordHeader'>{title}</h2>

            <div className={`${styles.details} ${defStyles.flexRow}`}>

                <p id='date'>{`${code.day.toString().padStart(2, "0")}.${code.month.toString().padStart(2, "0")}.${code.year}`}</p> <p>{note}</p>

            </div>
            <p id='recordText'>{text}</p>
        </div>
    )
}
export default BlogRecord;