import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    
      <List>
        <li>Statistics</li>
        <li>good: {good} </li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad} </li>
        <li>Total feedback: {total}</li>
        <li>Positive feedback percentage: {positivePercentage}%</li>
      </List>
   
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
