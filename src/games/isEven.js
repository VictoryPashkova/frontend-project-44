import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getEvenData = () => {
  const minRandomDigit = 50;
  const maxRandomDigit = 1000;
  const randomNumberOne = getRandomNumber(maxRandomDigit, minRandomDigit);

  const dataForQuestion = randomNumberOne;
  const correctAnswer = isEven(randomNumberOne) ? 'yes' : 'no';

  const getRoundData = [dataForQuestion, correctAnswer];

  return getRoundData;
};

const runEvenGame = () => runGameLogic(description, getEvenData);

export default runEvenGame;
