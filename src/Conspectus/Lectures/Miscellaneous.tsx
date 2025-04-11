import styles from './Lectures.module.scss'
import { useState } from 'react';

type MisProps = {
    isMis: boolean,
}

function Miscellaneous({ isMis }: MisProps) {

    const [isP1, setP1] = useState<boolean>(false);
    // const [isP2, setP2] = useState<boolean>(false);
    // const [isP3, setP3] = useState<boolean>(false);
    // const [isP4, setP4] = useState<boolean>(false);
    // const [isP5, setP5] = useState<boolean>(false);
    // const [isP6, setP6] = useState<boolean>(false);

    return (
        <div className={isMis ? styles.lectures : styles.hidden}>
            <p>Non specific lectures galore</p>
            <section>
                <button className={styles.sectionHeader} onClick={() => setP1((prev)=>!prev)}>
                    <h3>SVG</h3>
                </button>
                

                    <div className={isP1 ? styles.sectionInner : styles.hidden}>
                        <div>
                            <span>Unlike other image formats, SVG are open to manipulation with code, next attributes are subject to change:</span>
                            <p>
                            <span>- hue</span>
                            <span>- saturation</span>
                            <span>- brightness</span>
                            <span><mark> !</mark> And the most important - you can code yourself an SVG</span>
                        </p>
                        <h4>Specific</h4>
                        <code>code</code>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Miscellaneous;