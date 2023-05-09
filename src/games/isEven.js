import readlineSync from 'readline-sync';
import { gamesNameRules, theGame } from '../index.js';

const isEvenNumber = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  gamesNameRules('even');

  theGame('even', name);
};

export default isEvenNumber;
