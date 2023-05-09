import readlineSync from 'readline-sync';
import { gamesNameRules, theGame } from '../index.js';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  gamesNameRules('prime');
  theGame('prime', name);
};

export default prime;
