import styles from './TimeTracker.module.scss'


function TimeTracker() {
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