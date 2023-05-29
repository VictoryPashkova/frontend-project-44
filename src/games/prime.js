import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let index = 2; index <= Math.sqrt(number); index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeData = () => {
  const minRandomDigit = 2;
  const maxRandomDigit = 200;
  const randomNumberOne = getRandomNumber(maxRandomDigit, minRandomDigit);

  const dataForQuestion = `${randomNumberOne}`;
  const correctAnswer = isPrime(randomNumberOne) ? 'yes' : 'no';
  const getRoundData = [dataForQuestion, correctAnswer];

  return getRoundData;
};

const runPrimeGame = () => runGameLogic(description, getPrimeData);

export default runPrimeGame;
