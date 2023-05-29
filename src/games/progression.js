import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progresstion = [];
  let firstNumber = start;

  for (let index = 0; index < length; index += 1) {
    firstNumber += step;
    progresstion.push(firstNumber);
  }
  return progresstion;
};

const getProgressionData = () => {
  const maxCommonValue = 10;
  const minCommonValue = 5;
  const randomLength = getRandomNumber(maxCommonValue, minCommonValue);
  const randomStep = getRandomNumber(maxCommonValue, minCommonValue);
  const randomFirstNumber = getRandomNumber(maxCommonValue, minCommonValue);

  const progression = getProgression(randomFirstNumber, randomStep, randomLength);
  const randomIndex = getRandomNumber(progression.length, 0);

  const hiddenNumber = progression[randomIndex];
  progression[randomIndex] = '..';

  const dataForQuestion = `${progression.join(' ')}`;
  const correctAnswer = String(hiddenNumber);

  const getRoundData = [dataForQuestion, correctAnswer];

  return getRoundData;
};

const runProgressionGame = () => runGameLogic(description, getProgressionData);

export default runProgressionGame;
