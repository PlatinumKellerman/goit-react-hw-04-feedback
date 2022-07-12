import PropTypes from 'prop-types';
import { FeedbackButtons } from './Buttons.styled';

export function Buttons({ handleFeddbackChange, stateKeys }) {
  return stateKeys.map(button => {
    return (
      <FeedbackButtons
        key={button}
        name={button}
        type="button"
        onClick={handleFeddbackChange}
      >
        {button}
      </FeedbackButtons>
    );
  });
}

Buttons.propTypes = {
  handleFeddbackChange: PropTypes.func.isRequired,
  stateKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
};
