import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

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
  return firstNumber + secondNumber;
};

const getGcdData = () => {
  const randomNumberOne = getRandomNumber();
  const randomNumberTwo = getRandomNumber();

  const dataForQuestion = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = String(getGcd(randomNumberOne, randomNumberTwo));

  const getRoundData = [dataForQuestion, correctAnswer];

  return getRoundData;
};

const runGcdGame = () => runGameLogic(description, getGcdData);

export default runGcdGame;
