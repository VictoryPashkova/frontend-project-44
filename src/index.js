import readlineSync from 'readline-sync';
import _ from "lodash";

const theGame = (gameName, name) => {
    let theEnd = '';
    let question = '';
    let correctAnswer = '';
    let wrongAnswerText = '';


    for (let i = 1; i <= 3; i += 1) {
      let randomNumberOne = Math.floor(Math.random() * (50 - 15)) + 15;
      let randomNumberTwo = Math.floor(Math.random() * (15 - 1)) + 1;

      if (gameName === 'calc') {
        const operatorArr = ['+', '-', '*']
        let randomOperatop = _.sample(operatorArr);
        question = randomNumberOne + randomOperatop + randomNumberTwo;
        
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
        question = `${randomNumberOne} ${randomNumberTwo}`;
          while (randomNumberOne !== 0 && randomNumberTwo !== 0) {
            if (randomNumberOne > randomNumberTwo) {
                randomNumberOne = randomNumberOne % randomNumberTwo;
            } else {
                randomNumberTwo = randomNumberTwo % randomNumberOne;
            }
            correctAnswer = String(randomNumberOne + randomNumberTwo); 
          }
      }

      console.log(question); 
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        theEnd = `Congratulations, ${name}!`;
        continue;
      } else {
        wrongAnswerText = `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`
        console.log(wrongAnswerText);
        theEnd = `Let's try again, ${name}!`;
        break; 
        }
    }
    console.log(theEnd);
};


const gamesNameRules = (gameName) => {
    switch(gameName) {
        case 'even':
            console.log('Answer "yes" if the number is even, otherwise answer "no".');
            break;
        case 'calc':
            console.log('What is the result of the expression?');
            break;
        case 'gcd':
            console.log('Find the greatest common divisor of given numbers.');
    }

};


export { gamesNameRules, theGame };
