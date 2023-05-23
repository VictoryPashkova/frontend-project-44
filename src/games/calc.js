import random from '../utils.js';

const calc = (numberOne, numberTwo, operatop) => {
  let correctAnswer = '';

  if (operatop === '+') {
    correctAnswer = String(numberOne + numberTwo);
  } else if (operatop === '-') {
    correctAnswer = String(numberOne - numberTwo);
  } else if (operatop === '*') {
    correctAnswer = String(numberOne * numberTwo);
  }

  return correctAnswer;
};

const calcGame = () => {
  const randomNumberOne = random(50, 15);
  const randomNumberTwo = random(15, 1);
  const operatorArr = ['+', '-', '*'];
  const randomOperatop = operatorArr[random(2, 0)];

  const questionUser = `Question: ${randomNumberOne} ${randomOperatop} ${randomNumberTwo}`;
  const correctAnswer = calc(randomNumberOne, randomNumberTwo, randomOperatop);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const calcDescription = 'What is the result of the expression?';

export { calcGame, calcDescription, calc };
