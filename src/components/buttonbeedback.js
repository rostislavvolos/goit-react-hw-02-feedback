import style from './Feedback.module.css';

const ButtonFeedback = ({onGood, onNeutral, onBad}) => (
    <div className={style.feedbackButton}>
            <button type='button' onClick={() => onGood("good")}>Good</button>
            <button type='button' onClick={() => onNeutral("neutral")}>Neutral</button>
            <button type='button' onClick={() => onBad("bad")}>Bad</button>
        </div>
    
)


export default ButtonFeedback;