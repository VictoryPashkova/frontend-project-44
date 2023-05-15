import { randomOne } from '../utils.js';

const isEvenGame = () => {
  const randomNumberOne = randomOne();
  let correctAnswer = '';
  let questionUser = '';

  questionUser = `Question: ${randomNumberOne}`;

  if (randomNumberOne % 2 === 0) {
    correctAnswer = 'yes';
  } else if (randomNumberOne % 2 !== 0) {
    correctAnswer = 'no';
  }

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const isEvenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export { isEvenGame, isEvenDescription };
