import readlineSync, { question } from 'readline-sync';
import _ from 'lodash';

const theGame = (gameName, name) => {
  let theEnd = '';
  let question = '';
  let correctAnswer = '';
  let wrongAnswerText = '';

  for (let i = 1; i <= 3; i += 1) {
    let randomNumberOne = Math.floor(Math.random() * (50 - 15)) + 15;
    let randomNumberTwo = Math.floor(Math.random() * (15 - 1)) + 1;

    if (gameName === 'calc') {
      const operatorArr = ['+', '-', '*'];
      const randomOperatop = _.sample(operatorArr);
      question = `Question: ${randomNumberOne} ${randomOperatop} ${randomNumberTwo}`;

      if (randomOperatop === '+') {
        correctAnswer = String(randomNumberOne + randomNumberTwo);
      } else if (randomOperatop === '-') {
        correctAnswer = String(randomNumberOne - randomNumberTwo);
      } else if (randomOperatop === '*') {
        correctAnswer = String(randomNumberOne * randomNumberTwo);
      }
    } else if (gameName === 'even') {
      question = `Question: ${randomNumberOne}`;
      if (randomNumberOne % 2 === 0) {
        correctAnswer = 'yes';
      } else if (randomNumberOne % 2 !== 0) {
        correctAnswer = 'no';
      }
    } else if (gameName === 'gcd') {
      question = `Question: ${randomNumberOne} ${randomNumberTwo}`;
      while (randomNumberOne !== 0 && randomNumberTwo !== 0) {
        if (randomNumberOne > randomNumberTwo) {
          randomNumberOne %= randomNumberTwo;
        } else {
          randomNumberTwo %= randomNumberOne;
        }
        correctAnswer = String(randomNumberOne + randomNumberTwo);
      }
    } else if (gameName === 'progression') {
      const arrProg = [];
      const randomLength = Math.floor(Math.random() * (10 - 6)) + 6;
      const randomIndex = Math.floor(Math.random() * ((randomLength - 1) - 0)) + 0;
      const randomStep = Math.floor(Math.random() * (10 - 2)) + 2;
      let randomFirstNumber = Math.floor(Math.random() * (10 - 1)) + 1;
      let hiddenNumber = 0;

      for (let i = 0; i < randomLength; i += 1) {
        randomFirstNumber += randomStep;
        arrProg.push(randomFirstNumber);
      }

      hiddenNumber = arrProg[randomIndex];
      arrProg[randomIndex] = '..';

      question = `Question: ${arrProg.join(' ')}`;
      correctAnswer = String(hiddenNumber);
    } else if (gameName === 'prime') {
      question = `Question: ${randomNumberOne}`;
      let value = false;

      for (let i = 2; i < randomNumberOne; i += 1) {
        if (randomNumberOne % i === 0) {
          value = false;
          correctAnswer = 'no';
          break;
        } else {
          value = true;
          correctAnswer = 'yes';
        }
      }
    }

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      theEnd = `Congratulations, ${name}!`;
      continue;
    } else {
      wrongAnswerText = `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`;
      console.log(wrongAnswerText);
      theEnd = `Let's try again, ${name}!`;
      break;
    }
  }
  console.log(theEnd);
};

const gamesNameRules = (gameName) => {
  switch (gameName) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
};

export { gamesNameRules, theGame };
