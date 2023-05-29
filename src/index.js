import readlineSync from 'readline-sync';

const runGameLogic = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const countRounds = 3;

  for (let i = 1; i <= countRounds; i += 1) {
    const [dataForQuestion, correctAnswer] = getGameData();
    const question = `Question: ${dataForQuestion}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGameLogic;
