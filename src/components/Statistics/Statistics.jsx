import PropTypes from 'prop-types';
import { Container } from '../Container/index';
import {
  StatisticsTitle,
  Text,
  TextKey,
  TextValueGood,
  TextValueNeutral,
  TextValueBad,
  TextValueTotal,
  Percentage,
} from './Statistics.styled';

export function Statistics({
  feedbackValues,
  totalFeedbacks,
  countPositivePercentage,
}) {
  const { good, neutral, bad } = feedbackValues;
  return (
    <Container>
      <StatisticsTitle>Statistics:</StatisticsTitle>
      <Text>
        <TextKey>Good:</TextKey>
        <TextValueGood>{good}</TextValueGood>
      </Text>
      <Text>
        <TextKey>Neutral:</TextKey>
        <TextValueNeutral>{neutral}</TextValueNeutral>
      </Text>
      <Text>
        <TextKey>Bad:</TextKey>
        <TextValueBad>{bad}</TextValueBad>
      </Text>
      <Text>
        <TextKey>Total:</TextKey>
        <TextValueTotal>{totalFeedbacks}</TextValueTotal>
      </Text>
      <Text>
        <TextKey>Positive feedback:</TextKey>
        <Percentage
          style={{
            color: countPositivePercentage > 49 ? 'limegreen' : 'red',
          }}
        >
          {countPositivePercentage}%
        </Percentage>
      </Text>
    </Container>
  );
}

Statistics.propTypes = {
  feedbackValues: PropTypes.object.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  countPositivePercentage: PropTypes.number.isRequired,
};
