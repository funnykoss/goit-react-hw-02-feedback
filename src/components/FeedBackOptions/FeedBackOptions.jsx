import React from 'react';
import s from '../FeedBackOptions/FeedBackOptions.module.css';


export default function FeedbackOptions ({ onLeaveFeedback }) {
  return (
    <div className={s.buttonBox}>
      <button className={s.buttonGood} type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={s.buttonNeutral} type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={s.buttonBad} type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
