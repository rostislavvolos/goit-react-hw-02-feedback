import style from './Feedback.module.css';
import PropTypes from 'prop-types';


const Statistics  = ({onGood, onNeutral, onBad, onTotal, positivePercentage}) => {
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

Statistics.propTypes = {
    onGood: PropTypes.number.isRequired,
    onNeutral: PropTypes.number.isRequired,
    onBad: PropTypes.number.isRequired,
    onTotal: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}



export default Statistics;


