import './App.css';
import FeedbackOptions from './Feedback';
import SectionTitle from './Section';
import Statistics from './Statistics';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPercentage = () => {
    const totalFeedbacks = this.countFeedbacks();
    const percents = Math.trunc((this.state.good / totalFeedbacks) * 100);
    return percents;
  };

  countFeedbacks = () => {
    const feedbacks = Object.values(this.state);
    const countedFeedbacks = feedbacks.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
    );
    return countedFeedbacks;
  };

  handleScore = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const stateKeys = Object.keys(this.state);
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.handleScore}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countFeedbacks() === 0 ? (
            <p style={{ fontSize: 25 }}>No feedback given</p>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countFeedbacks()}
              percentage={this.countPercentage()}
            />
          )}
        </SectionTitle>
      </>
    );
  }
}
