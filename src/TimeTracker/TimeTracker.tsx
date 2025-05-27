import styles from './TimeTracker.module.scss'
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';

//Records:Years[]
// Years {"year":number,"months":Months[],delta:number}
// Months {"month":number,"days":Days[],delta}
// Days {"day":number,"records":Record[],delta}
// Options
// Records[0].year = first year 
// Records.pop().year = last year 




type Record = {
    "in": Date,
    "out": Date,
    "delta": number
}


function TimeTracker() {

    // How many milliseconds in an hour
    const millHour = 3.6e+6;

    // Current month data
    // DATA (JSON).parse => curentMonth:Record[] => currentMonthHours:Number[] => finalMonthHoursCalc

    // const [currentMonth, setCurrentMonth] = useState<Record[]>([]); // fill with useEffect
    // const currentMonthHours: number[] = useMemo<number[]>(() => currentMonth.map((x) => x.delta), [currentMonth]); // auto calc map from deltas of all the records of the month
    // const finalMonthHoursCalc: number = useMemo<number>(() => currentMonthHours.reduce((acc, current) => acc + current, 0), [currentMonthHours]); // auto calc hours from all the deltas


    // save today interval like
    // save in (to the serv) , save out triggers => calc delta and save the record to the "server", clean "in";
    // We should have a clock on the panel that is counting time from the last "in" if it exists;

    // GREETINGS settings //

    const [today, setToday] = useState<Date | undefined>(undefined);
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);

    // Data //

    const [records, setRecords] = useState<Record[]>([]);
    const [refresh,setRefresh] = useState<boolean>(false);


    // MAIN PART //

    function checkInOut() {
        const newDate = new Date();

        if (!checkIn) {
            setCheckIn(newDate);
        }
        else {
            const newDelta: number = (newDate - checkIn);
            setCheckIn(undefined);
            // console.log(newDelta);

            const newRecord: Record = {
                "in": checkIn,
                "out": newDate,
                "delta": newDelta
            }

            const storageRecords = localStorage.getItem("TimeTrackerRecords");
            if (storageRecords) {
                const parsedRecords = JSON.parse(storageRecords);
                parsedRecords.push(newRecord);
                localStorage.setItem("TimeTrackerRecords", JSON.stringify(parsedRecords));
                setRecords(parsedRecords);
            }
            else {
                localStorage.setItem("TimeTrackerRecords", JSON.stringify([newRecord]));
                setRecords([newRecord]);
            }
        }

    }


    useEffect(() => {

        const savedRecords = localStorage.getItem("TimeTrackerRecords");

        if (savedRecords) {
            const parsedRecords = JSON.parse(savedRecords);
            setRecords(parsedRecords);
        }

        setToday(new Date());
    }, [refresh])

    

    

    return (
        <div className={styles.mainContainer}>
            <h3>Time Tracker</h3>
            <div className={styles.container}>
                <div className={styles.data}>

                    <div className={styles.dataHeader}>
                        <span><p>Date</p><p>In</p><p>Out</p><p>{`Sum (h)`}</p></span>
                    </div>

                    <div className={styles.superContainer}>
                        <span><p>24.05.25</p><p>08:00</p><p>13:00</p><p>5:00</p></span>
                        <span><p>24.05.25</p><p>15:00</p><p>18:30</p><p>3:30</p></span>

                        {
                            records.map((record, index) => {

                                const rIn = new Date(record.in);
                                const rOut = new Date(record.out);
                                const delta: number = rOut - rIn;
                                const hours = Math.floor(delta / (1000 * 60 * 60));
                                let rest = delta - (hours * (1000 * 60 * 60));
                                const minutes = Math.floor(rest / (1000 * 60));

                                return <span key={index}><p>{rIn.getDate().toString().padStart(2, "0") + "." + (rIn.getMonth() + 1).toString().padStart(2, "0") + "." + rIn.getFullYear().toString()}</p>
                                    <p>{rIn.getHours().toString().padStart(2, "0") + ":" + rIn.getMinutes().toString().padStart(2, "0")}</p>
                                    <p>{rOut.getHours().toString().padStart(2, "0") + ":" + rOut.getMinutes().toString().padStart(2, "0")}</p>
                                    <p>{hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0")}</p></span>
                            })



                        }
                    </div>
                </div>

                <div className={styles.action}>
                    <p>Today is</p>
                    <p>{today ? week[today.getDay()] : ""}</p>
                    <strong><p>{today ? (today.getDate().toString().padStart(2, "0") + "." + (today.getMonth() + 1).toString().padStart(2, "0") + "." + today.getFullYear().toString()) : "is a nice day."}</p></strong>
                    <button onClick={checkInOut}>{!checkIn ? "Chek In" : "Check Out"}</button>
                    <button onClick={()=>setRefresh((prev)=>!prev)}>Refresh</button>


                    {checkIn && <div className={styles.dataBox}>
                        <p>Current session lasts from</p>
                        <strong><p>{checkIn.getHours().toString().padStart(2, "0") + ":" + checkIn.getMinutes().toString().padStart(2, "0")}</p></strong>
                    </div>}
                    <div className={styles.dataBox}>
                        In this month you worked <strong>N</strong> hours
                    </div>

                </div>
            </div>
        </div>
    )
}


export default TimeTracker;