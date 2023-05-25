import readlineSync from 'readline-sync';

const runGameLogic = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  let wrongAnswerText = '';
  const numberOfRound = 3;

  for (let i = 1; i <= numberOfRound; i += 1) {
    const [questionUser, correctAnswer] = getGameData();
    console.log(questionUser);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      wrongAnswerText = `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`;
      console.log(wrongAnswerText);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGameLogic;
