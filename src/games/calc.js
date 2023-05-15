import _ from 'lodash';
import { randomOne, randomTwo } from '../utils.js';

const calcGame = () => {
  const randomNumberOne = randomOne();
  const randomNumberTwo = randomTwo();
  const operatorArr = ['+', '-', '*'];
  const randomOperatop = _.sample(operatorArr);
  let correctAnswer = '';
  let questionUser = '';

  questionUser = `Question: ${randomNumberOne} ${randomOperatop} ${randomNumberTwo}`;

  if (randomOperatop === '+') {
    correctAnswer = String(randomNumberOne + randomNumberTwo);
  } else if (randomOperatop === '-') {
    correctAnswer = String(randomNumberOne - randomNumberTwo);
  } else if (randomOperatop === '*') {
    correctAnswer = String(randomNumberOne * randomNumberTwo);
  }

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const calcDescription = 'What is the result of the expression?';

export { calcGame, calcDescription };
