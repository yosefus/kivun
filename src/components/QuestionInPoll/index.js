import styles from "./style.module.css"
// props.Qustione.type == "linear"{props.Qustione}
export default function QustioneInPoll(props) {
    let arr = ["qqqqqq", "qqqqqq", "qqqqqq", "qqqqqq", "qqqqqq", "qqqqqq"]
    return <div className={styles.QustioneInPoll}>
        <span>איך היה הקורס</span>
        <div>
            {(false) ?
                <div className={styles.linear}>
                    <div> {`גרוע`}<br></br><div className={styles.botton}>1</div></div>
                    <div className={styles.botton}>2</div>
                    <div className={styles.botton}>3</div>
                    <div className={styles.botton}>4</div>
                    <div className={styles.botton}>5</div>
                    <div className={styles.botton}>6</div>
                    <div className={styles.botton}>7</div>
                    <div className={styles.botton}>8</div>
                    <div className={styles.botton}>9</div>
                    <div>{`מעולה`}<br></br><div className={styles.botton} >10</div></div>
                </div> : <div className={styles.answers}>
                    <ul>
                        {arr.map((a, index) =>
                            <li>
                                <div>
                                    {index + 1} : {a}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>}

        </div>
    </div>
}