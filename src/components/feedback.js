import React from 'react';
import style from './Feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
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

    render () {
        return ( 
            <Section title="Please leave feedback!">
    <div className={style.feedback}>
        <FeedbackOptions 
        onGood={this.FeedbackFunction}
        onNeutral={this.FeedbackFunction}
        onBad={this.FeedbackFunction}
        />
        <p className={style.statistics}>Statistics</p>
        <Statistics 
        onGood={this.state.good}
        onNeutral={this.state.neutral}
        onBad={this.state.bad}
        onTotal={this.countTotal()}
        positivePercentage={this.positivePercentage()}
        />
    </div>
    </Section>
    )
    }
}



export default Feedback;