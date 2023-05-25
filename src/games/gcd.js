import random from '../utils.js';
import runGameLogic from '../index.js';

const gcdDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberOne, numberTwo) => {
  let firstNumber = numberOne;
  let secondNumber = numberTwo;

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return String(firstNumber + secondNumber);
};

const getGcdData = () => {
  const randomNumberOne = random();
  const randomNumberTwo = random();

  const questionUser = `Question: ${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = getGcd(randomNumberOne, randomNumberTwo);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const runGcdGame = () => runGameLogic(gcdDescription, getGcdData);

export default runGcdGame;
