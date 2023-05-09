import readlineSync from 'readline-sync';
import _ from "lodash";
import { gamesNameRules, theGame } from '../src/index.js';

const progression = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
  
    gamesNameRules('progression');
    theGame('progression', name);
};

export default progression;