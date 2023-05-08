import readlineSync from 'readline-sync';
import { gamesNameRules, theGame } from '../src/index.js';
import _ from "lodash";


const isEvenNumber = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
  
    gamesNameRules('even');

    theGame('even', name);
};

export default isEvenNumber;