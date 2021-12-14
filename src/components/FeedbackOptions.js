import style from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({onGood, onNeutral, onBad}) => (
    <div className={style.feedbackButton}>
            <button type='button' onClick={() => onGood("good")}>Good</button>
            <button type='button' onClick={() => onNeutral("neutral")}>Neutral</button>
            <button type='button' onClick={() => onBad("bad")}>Bad</button>
        </div>
    
)

 

FeedbackOptions.propTypes = {
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired
}



export default FeedbackOptions;