import styles from './TimeTracker.module.scss'
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';




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
    
    const [currentMonth, setCurrentMonth] = useState<Record[]>([]); // fill with useEffect
    const currentMonthHours: number[] = useMemo<number[]>(() => currentMonth.map((x) => x.delta), [currentMonth]); // auto calc map from deltas of all the records of the month
    const finalMonthHoursCalc: number = useMemo<number>(() => currentMonthHours.reduce((acc, current) => acc + current, 0), [currentMonthHours]); // auto calc hours from all the deltas


    // save today interval like
    // save in (to the serv) , save out triggers => calc delta and save the record to the "server", clean "in";
    // We should have a clock on the panel that is counting time from the last "in" if it exists;

    const [checkIn, setCheckIn] = useState<Date|undefined>(undefined);


    function checkInOut(){
        const newDate:Date = new Date();
        if(!checkIn){
            setCheckIn(newDate);
        }
        const newDelta:number = (newDate-checkIn)/millHour;
    }


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
                    </div>
                </div>

                <div className={styles.action}>
                    <p>Today is</p>
                    <strong><p>25.05.25</p></strong>
                    <button>Check Out</button>
                    <p>Current session lasts from</p>
                    <strong><p>15:30</p></strong>
                </div>
            </div>
        </div>
    )
}


export default TimeTracker;