import random from '../utils.js';

const isPrime = (number) => {
  let correctAnswer = '';

  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
  return correctAnswer;
};

const primeGame = () => {
  const randomNumberOne = random(200, 2);

  const questionUser = `Question: ${randomNumberOne}`;
  const correctAnswer = isPrime(randomNumberOne);
  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { primeGame, primeDescription, isPrime };
