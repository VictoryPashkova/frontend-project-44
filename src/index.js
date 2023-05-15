import readlineSync from 'readline-sync';

const game = (description, gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  let theEnd = '';
  let wrongAnswerText = '';

  for (let i = 1; i <= 3; i += 1) {
    const [questionUser, correctAnswer] = gameName();
    console.log(questionUser);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      theEnd = `Congratulations, ${name}!`;
    } else {
      wrongAnswerText = `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`;
      console.log(wrongAnswerText);
      theEnd = `Let's try again, ${name}!`;
      break;
    }
  }
  console.log(theEnd);
};

export default game;
