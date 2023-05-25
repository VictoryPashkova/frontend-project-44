import random from '../utils.js';
import runGameLogic from '../index.js';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeData = () => {
  const minRandomDigit = 2;
  const maxRandomDigit = 200;
  const randomNumberOne = random(maxRandomDigit, minRandomDigit);

  const questionUser = `Question: ${randomNumberOne}`;
  const correctAnswer = isPrime(randomNumberOne) ? 'yes' : 'no';
  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const runPrimeGame = () => runGameLogic(primeDescription, getPrimeData);

export default runPrimeGame;
