import { useState } from 'react';
import { Feedback } from './components/Feedback/index';
import { Buttons } from './components/Buttons/index';
import { Statistics } from './components/Statistics/index';
import { Notification } from './components/Notification/index';
import { Container } from 'components/Container/index';

export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);
  const buttonNames = ['good', 'neutral', 'bad'];
  const totalFeedbacks = good + neutral + bad;

  const handleFeddbackChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGoodFeedback(good + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutral + 1);
        break;
      case 'bad':
        setBadFeedback(bad + 1);
        break;
      default:
        return;
    }
  };

  const countPositivePercentage = () => {
    const positivePercentage = Math.round(
      Number((good * 100) / totalFeedbacks)
    );
    return positivePercentage;
  };

  return (
    <Container>
      <Feedback title="Please leave feedback" />
      <Buttons handleFeddbackChange={handleFeddbackChange} keys={buttonNames} />
      {totalFeedbacks > 0 ? (
        <Statistics
          feedbackValues={{ good, neutral, bad }}
          totalFeedbacks={totalFeedbacks}
          countPositivePercentage={countPositivePercentage()}
        />
      ) : (
        <Notification title="There is no feedback" />
      )}
    </Container>
  );
};
