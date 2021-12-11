import style from './Feedback.module.css';


const StatlistItem = ({onGood, onNeutral, onBad, onTotal, positivePercentage}) => {
    return (
        <ul className={style.statList}>
            <li className={style.statListItem}>Good:&nbsp;
                <span className={style.statNumber}>{onGood}</span>
            </li>
            <li className={style.statListItem}>Neutral:&nbsp;
                <span className={style.statNumber}>{onNeutral}</span>
            </li>
            <li className={style.statListItem}>Bad:&nbsp;
                <span className={style.statNumber}>{onBad}</span>
            </li>
            <li className={style.statListItem}>Total:&nbsp;
                <span className={style.statNumber}>{onTotal}</span>
            </li>
            <p className={style.text}>Positive feedback: {positivePercentage} %</p>
        </ul>
    )
}




export default StatlistItem;