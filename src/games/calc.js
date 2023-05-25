import random from '../utils.js';
import runGameLogic from '../index.js';

const calcDescription = 'What is the result of the expression?';

const calculateExpresion = (numberOne, numberTwo, operatop) => {
  switch (operatop) {
    case '+':
      return String(numberOne + numberTwo);
    case '-':
      return String(numberOne - numberTwo);
    case '*':
      return String(numberOne * numberTwo);
    default:
      throw new Error(`Unknown operator: '${operatop}'!`);
  }
};

const getCalcData = () => {
  const minRandomDigit = 1;
  const middleRandomDigit = 15;
  const maxRandomDigit = 50;
  const randomNumberOne = random(maxRandomDigit, middleRandomDigit);
  const randomNumberTwo = random(middleRandomDigit, minRandomDigit);
  const operatorArr = ['-', '*', '+'];
  const maxLengthArr = 3;
  const minLengthArr = 0;
  const randomOperatop = operatorArr[random(maxLengthArr, minLengthArr)];

  const questionUser = `Question: ${randomNumberOne} ${randomOperatop} ${randomNumberTwo}`;
  const correctAnswer = calculateExpresion(randomNumberOne, randomNumberTwo, randomOperatop);

  const getRoundData = [questionUser, correctAnswer];

  return getRoundData;
};

const runCalcGame = () => runGameLogic(calcDescription, getCalcData);

export default runCalcGame;
