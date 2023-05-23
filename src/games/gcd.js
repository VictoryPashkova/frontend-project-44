import random from '../utils.js';

const gcdCalc = (numberOne, numberTwo) => {
  let correctAnswer = '';

  while (numberOne !== 0 && numberTwo !== 0) {
    if (numberOne > numberTwo) {
      // eslint-disable-next-line no-param-reassign
      numberOne %= numberTwo;
    } else {
      // eslint-disable-next-line no-param-reassign
      numberTwo %= numberOne;
    }
    correctAnswer = String(numberOne + numberTwo);
  }
  return correctAnswer;
};

const gcdGame = () => {
  const randomNumberOne = random();
  const randomNumberTwo = random();

  const questionUser = `Question: ${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = gcdCalc(randomNumberOne, randomNumberTwo);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const gcdDescription = 'Find the greatest common divisor of given numbers.';

export { gcdGame, gcdDescription, gcdCalc };
