import random from '../utils.js';

const getProgression = (start, step, length) => {
  const arrProg = [];

  for (let k = 0; k < length; k += 1) {
    // eslint-disable-next-line no-param-reassign
    start += step;
    arrProg.push(start);
  }
  return arrProg;
};

const progressionGame = () => {
  let correctAnswer = '';
  let questionUser = '';
  let hiddenNumber = 0;

  const randomLength = random(10, 5);
  const randomStep = random(10, 2);
  const randomFirstNumber = random(10, 2);

  const arrProg = getProgression(randomFirstNumber, randomStep, randomLength);
  const randomIndex = random(arrProg.length, 0);

  hiddenNumber = arrProg[randomIndex];
  arrProg[randomIndex] = '..';

  questionUser = `Question: ${arrProg.join(' ')}`;
  correctAnswer = String(hiddenNumber);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const progressionDescription = 'What number is missing in the progression?';

export { progressionGame, progressionDescription, getProgression };
