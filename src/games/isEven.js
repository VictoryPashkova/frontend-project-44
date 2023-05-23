import random from '../utils.js';

const isEven = (number) => {
  let correctAnswer = '';

  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else if (number % 2 !== 0) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const isEvenGame = () => {
  const randomNumberOne = random(1000, 50);

  const questionUser = `Question: ${randomNumberOne}`;
  const correctAnswer = isEven(randomNumberOne);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const isEvenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export { isEvenGame, isEvenDescription, isEven };
