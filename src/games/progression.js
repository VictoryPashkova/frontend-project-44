const progressionGame = () => {
  let correctAnswer = '';
  let questionUser = '';

  const arrProg = [];
  const randomLength = Math.floor(Math.random() * (10 - 5)) + 5;
  const randomIndex = Math.floor(Math.random() * ((randomLength - 1) - 0)) + 0;
  const randomStep = Math.floor(Math.random() * (10 - 2)) + 2;
  let randomFirstNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  let hiddenNumber = 0;

  for (let k = 0; k < randomLength; k += 1) {
    randomFirstNumber += randomStep;
    arrProg.push(randomFirstNumber);
  }

  hiddenNumber = arrProg[randomIndex];
  arrProg[randomIndex] = '..';

  questionUser = `Question: ${arrProg.join(' ')}`;
  correctAnswer = String(hiddenNumber);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const progressionDescription = 'What number is missing in the progression?';

export { progressionGame, progressionDescription };
