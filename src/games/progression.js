import random from '../utils.js';
import runGameLogic from '../index.js';

const progressionDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progresstion = [];
  let firstNumber = start;

  for (let k = 0; k < length; k += 1) {
    firstNumber += step;
    progresstion.push(firstNumber);
  }
  return progresstion;
};

const getProgresstionData = () => {
  const maxCommonValue = 10;
  const minCommonValue = 5;
  const randomLength = random(maxCommonValue, minCommonValue);
  const randomStep = random(maxCommonValue, minCommonValue);
  const randomFirstNumber = random(maxCommonValue, minCommonValue);

  const progresstion = getProgression(randomFirstNumber, randomStep, randomLength);
  const randomIndex = random(progresstion.length, 0);

  const hiddenNumber = progresstion[randomIndex];
  progresstion[randomIndex] = '..';

  const questionUser = `Question: ${progresstion.join(' ')}`;
  const correctAnswer = String(hiddenNumber);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const runProgresstionGame = () => runGameLogic(progressionDescription, getProgresstionData);

export default runProgresstionGame;
