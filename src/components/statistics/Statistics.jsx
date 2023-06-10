import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li>Statistics</li>
      <li>good: {good} </li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad} </li>
      <li>Total feedback: {total}</li>
      <li>Positive feedback percentage: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
