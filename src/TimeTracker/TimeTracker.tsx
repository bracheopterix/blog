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
}


function TimeTracker() {

    // Current month data
    // DATA (JSON).parse => curentMonth:Record[] => currentMonthHours:Number[] => finalMonthHoursCalc


    // save today interval like
    // save in (to the serv) , save out triggers => calc delta and save the record to the "server", clean "in";
    // We should have a clock on the panel that is counting time from the last "in" if it exists;


    // Inside the adaptive superContainer in the length of ALL the loaded records 
    // we have realList which only renders what we do need. 
    // and somewhat of a scroll catcher?



    // GREETINGS settings //

    const [today, setToday] = useState<Date | undefined>(undefined);
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);

    // Data - records //

    const [records, setRecords] = useState<Record[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);

    // saved Elements //
    const superContainer = useRef<HTMLInputElement>(null);


    // Virtual scrolling 
    const [visibleRecords, setVisibleRecords] = useState<Record[]>([]);
    const visibleCount = 24; // amount of visible records in the realList container
    const additionalCount = 4; // amount of additional loaded records for smooth loading

    // const scrollRef = useRef(null);
    const [scrollPos,setScrollPos] = useState<number>(0)
    

    // const scroll = superContainer.addEventListener('scroll', ...);
    function scrollHandle() {
        if (scrollRef){

        }
    }


    // Calculating delta of all the worked hours from the records
    const finalDelta = useMemo(() => {
        return records.reduce((acc, current) => acc + (current.out.getTime() - current.in.getTime()), 0);
    }, [records])
    // const [delta,setDelta] = useState<number>(0);




    // ON MOUNT (and refresh) //
    useEffect(() => {
        // decoration date
        setToday(new Date());

        // loading records
        const savedRecords = localStorage.getItem("TimeTrackerRecords");
        if (savedRecords) {

            // const parsedRecordsRaw = JSON.parse(savedRecords);
            // const parsedRecords = parsedRecordsRaw.map((el: any) => ({ "in": new Date(el.in), "out": new Date(el.out) }));
            // the same as V
            const parsedRecords = parseRecords(savedRecords)
            setRecords(parsedRecords);
            setVisibleRecords(parsedRecords.slice(0, visibleCount + additionalCount));
        }


    }, [refresh])



    // Height of superContainer depends on records.length
    useEffect(() => {
        if (superContainer.current) {
            superContainer.current.style.height = (records.length * 24) + "px";
        }

        console.log(visibleRecords);
    }, [records])



    // MAIN PART //

    // Button functionality
    // Refresh button is written-in, just refreshes a refresh state to reload everything

    function checkInOut() {
        const newDate = new Date();

        if (!checkIn) {
            setCheckIn(newDate);
        }
        else {
            setCheckIn(undefined);

            const newRecord: Record = {
                "in": checkIn,
                "out": newDate,
            }

            const storageRecords = localStorage.getItem("TimeTrackerRecords");
            if (storageRecords) {

                // const parsedRecordsRAW = JSON.parse(storageRecords);
                // const parsedRecords = parsedRecordsRAW.map((el: any) => ({ "in": new Date(el.in), "out": new Date(el.out) }));
                // the same as V
                const parsedRecords = parseRecords(storageRecords)
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

    /// TECH FUNCITONS ///

    // Parsing JSON records to the date format in and out
    function parseRecords(records: string): Record[] {
        const parsedRecordsRAW = JSON.parse(records);
        const parsedRecords = parsedRecordsRAW.map((el: any) => ({ "in": new Date(el.in), "out": new Date(el.out) }));
        return parsedRecords;
    }

    // Counts how many hours and seconds in your time delta in milliseconds
    function millToTime(mill: number) {
        const hours = Math.floor(mill / (1000 * 60 * 60));
        let rest = mill - (hours * (1000 * 60 * 60));
        const minutes = Math.round(rest / (1000 * 60));
        // return { "hours": hours, "minutes": minutes };
        return (hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0"));
    }


    return (
        <div className={styles.mainContainer}>
            <h3>Time Tracker</h3>
            <div className={styles.container}>
                <div className={styles.data}>

                    <div className={styles.dataHeader}>
                        <span><p>Date</p><p>In</p><p>Out</p><p>{`Sum (h)`}</p></span>
                    </div>

                    <div className={styles.superContainer} ref={superContainer}>
                        {/* testing records */}
                        {/* <span><p>24.05.25</p><p>08:00</p><p>13:00</p><p>5:00</p></span> */}
                        {/* <span><p>24.05.25</p><p>15:00</p><p>18:30</p><p>3:30</p></span> */}


                        {/* ADDED RECORDS */}
                        {/* {records.map((record, index) => {

                            const rIn = record.in;
                            const rOut = record.out;
                            const delta: number = rOut.getTime() - rIn.getTime();
                            const timeDelta = millToTime(delta);

                            return <span key={index}><p>{rIn.getDate().toString().padStart(2, "0") + "." + (rIn.getMonth() + 1).toString().padStart(2, "0") + "." + (rIn.getFullYear() % 100).toString()}</p>
                                <p>{rIn.getHours().toString().padStart(2, "0") + ":" + rIn.getMinutes().toString().padStart(2, "0")}</p>
                                <p>{rOut.getHours().toString().padStart(2, "0") + ":" + rOut.getMinutes().toString().padStart(2, "0")}</p>
                                <p>{timeDelta}</p></span>
                        })
                        } */}

                        {visibleRecords.map((record, index) => {

                            const rIn = record.in;
                            const rOut = record.out;
                            const delta: number = rOut.getTime() - rIn.getTime();
                            const timeDelta = millToTime(delta);

                            return <span key={index}><p>{rIn.getDate().toString().padStart(2, "0") + "." + (rIn.getMonth() + 1).toString().padStart(2, "0") + "." + (rIn.getFullYear() % 100).toString()}</p>
                                <p>{rIn.getHours().toString().padStart(2, "0") + ":" + rIn.getMinutes().toString().padStart(2, "0")}</p>
                                <p>{rOut.getHours().toString().padStart(2, "0") + ":" + rOut.getMinutes().toString().padStart(2, "0")}</p>
                                <p>{timeDelta}</p></span>
                        })
                        }

                    </div>
                </div>


                {/* ACTION CONTAINER */}
                <div className={styles.action}>
                    <p>Today is</p>
                    <p>{today ? week[today.getDay()] : ""}</p>
                    <strong><p>{today ? (today.getDate().toString().padStart(2, "0") + "." + (today.getMonth() + 1).toString().padStart(2, "0") + "." + today.getFullYear().toString()) : "is a nice day."}</p></strong>
                    <button onClick={checkInOut}>{!checkIn ? "Check In" : "Check Out"}</button>
                    <button onClick={() => setRefresh((prev) => !prev)}>Refresh</button>


                    {checkIn && <div className={styles.dataBox}>
                        <p>Current session lasts from</p>
                        <strong><p>{checkIn.getHours().toString().padStart(2, "0") + ":" + checkIn.getMinutes().toString().padStart(2, "0")}</p></strong>
                    </div>}
                    <div className={styles.dataBox}>


                        Total time:
                        <strong>{millToTime(finalDelta)}</strong>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default TimeTracker;