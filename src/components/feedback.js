import React from 'react';
import style from './Feedback.module.css';
import ButtonFeedback from './buttonbeedback';
import StatlistItem from './statList';
class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad:0,
    };

    countTotal = () => {
        return this.state.good + this.state.bad + this.state.neutral
    }


    positivePercentage = () => {
        if(this.countTotal()) {
            return (this.state.good / this.countTotal() * 100 ).toFixed()
        } else {
            return 0
        }

      };


      FeedbackFunction = (name) => {
        console.log(name);
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    };


    // FeedbackFunction = event => {
    //     const {name} = event.target;
    //     this.setState(prevState => {
    //         return {
    //             [name]: prevState[name] + 1,
    //         };
    //     });
    // };

    // handleGood = () => {
    //     this.setState((prevState) => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });
    // };

    

    // handleNeutral = () => {
    //     this.setState((prevState) => {
    //         return {
    //             neutral: prevState.neutral + 1,
    //         };
    //     });
    // }

    // handleBad = () => {
    //     this.setState((prevState) => {
    //         return {
    //             bad: prevState.bad + 1,
    //         };
    //     });
    // }

    render () {
        return (
    <div className={style.feedback}>
        <p className={style.feedbackTitle}>
            Please leave feedback!
        </p>
        <ButtonFeedback 
        onGood={this.FeedbackFunction}
        onNeutral={this.FeedbackFunction}
        onBad={this.FeedbackFunction}
        />
        <p className={style.statistics}>Statistics</p>
        <StatlistItem
        onGood={this.state.good}
        onNeutral={this.state.neutral}
        onBad={this.state.bad}
        onTotal={this.countTotal()}
        positivePercentage={this.positivePercentage()}
        />
    </div>
    )
    }
}



export default Feedback;