import random from '../utils.js';
import runGameLogic from '../index.js';

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getEvenData = () => {
  const minRandomDigit = 50;
  const maxRandomDigit = 1000;
  const randomNumberOne = random(maxRandomDigit, minRandomDigit);

  const questionUser = `Question: ${randomNumberOne}`;
  const correctAnswer = isEven(randomNumberOne) ? 'yes' : 'no';

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const runEvenGame = () => runGameLogic(evenDescription, getEvenData);

export default runEvenGame;
