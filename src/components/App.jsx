import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Card } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Percents } from './Function';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { useState } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const incrementClick = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Percents(good, countTotalFeedback());
  };

  return (
    <Card>
      <Section title="Please leave feedback">
        <FeedbackOptions
          incrementClick={incrementClick}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Card>
  );
};
