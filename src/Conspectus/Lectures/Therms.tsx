import styles from './Lectures.module.scss'

type ThermsProps = {
    isTherms: boolean,
}

function Therms({isTherms}:ThermsProps) {



    return (

        <div className={isTherms ? styles.mainContainer : styles.hidden}>
            <section>
                <div>
                    <h4>Universal</h4>
                    <span> Child and parent - relations of elements inlays</span>
                    <span>{`Hyperlink - is your link (a = anchor)`}</span>
                </div>

                <div>
                    <h4>CSS</h4>
                    <span> Selector - a group defined by <u>element</u>, <u>ID</u> or <u>class</u> name <code>{`selector{}`}</code> or <code>{`#selector{}`}</code> or <code>{`.selector{}`}</code></span>
                    <span> Property + value - some charachteristics, inside the selector and it's value</span>
                    <span> Univeral selector - <mark>*</mark> may be used to select all the children elements in a particular range. </span>
                    <span>Pseudo-class - selector to narrow down certain rules</span>
                </div>

                <div>
                    <h4>HTML</h4>
                    <span>Has <u>tags</u>, which have <u>attributes</u> and <u>value</u></span>
                </div>
            </section>
        </div>


    )
}

export default Therms;