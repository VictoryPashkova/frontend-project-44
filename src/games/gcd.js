import { randomOne, randomTwo } from '../utils.js';

const gcdGame = () => {
  let randomNumberOne = randomOne();
  let randomNumberTwo = randomTwo();
  let correctAnswer = '';
  let questionUser = '';

  questionUser = `Question: ${randomNumberOne} ${randomNumberTwo}`;

  while (randomNumberOne !== 0 && randomNumberTwo !== 0) {
    if (randomNumberOne > randomNumberTwo) {
      randomNumberOne %= randomNumberTwo;
    } else {
      randomNumberTwo %= randomNumberOne;
    }
    correctAnswer = String(randomNumberOne + randomNumberTwo);
  }

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const gcdDescription = 'Find the greatest common divisor of given numbers.';

export { gcdGame, gcdDescription };
