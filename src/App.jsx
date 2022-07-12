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

  const handleFeddbackChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGoodFeedback(good + 1);
        break;
      case 'neutral':
        setGoodFeedback(neutral + 1);
        break;
      case 'bad':
        setGoodFeedback(bad + 1);
        break;
      default:
        return;
    }
  };

  console.log(good);
  console.log(bad);
  console.log(neutral);
  // const handleGoodFeedbackChagne = e => {
  //   const { name } = e.target;
  // };

  // const handleNeytralFeedbackChagne = e => {
  //   const { name } = e.target;
  // };

  // const handleBadFeedbackChagne = e => {
  //   const { name } = e.target;
  // };

  return (
    <Container>
      <Feedback title="Please leave feedback" />
      <Buttons
        handleFeddbackChange={handleFeddbackChange}
        stateKeys={buttonNames}
      />
      {/* {this.countTotalFeedback() > 0 ? (
        <Statistics
          state={this.state}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification title="There is no feedback" />
      )} */}
    </Container>
  );
};
