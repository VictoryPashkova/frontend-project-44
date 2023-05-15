import { randomOne } from '../utils.js';

const primeGame = () => {
  const randomNumberOne = randomOne();
  let correctAnswer = '';
  let questionUser = '';

  questionUser = `Question: ${randomNumberOne}`;

  for (let j = 2; j < randomNumberOne; j += 1) {
    if (randomNumberOne % j === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { primeGame, primeDescription };
