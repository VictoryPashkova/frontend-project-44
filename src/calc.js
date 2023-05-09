import readlineSync from 'readline-sync';
import { gamesNameRules, theGame } from './index.js';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  gamesNameRules('calc');

  theGame('calc', name);
};

export default calc;
