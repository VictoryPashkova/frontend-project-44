import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What is the result of the expression?';

const calcExpresion = (numberOne, numberTwo, operatop) => {
  switch (operatop) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error(`Unknown operator: '${operatop}'!`);
  }
};

const getCalcData = () => {
  const minRandomDigit = 1;
  const middleRandomDigit = 15;
  const maxRandomDigit = 50;
  const randomNumberOne = getRandomNumber(maxRandomDigit, middleRandomDigit);
  const randomNumberTwo = getRandomNumber(middleRandomDigit, minRandomDigit);
  const operatorArr = ['-', '*', '+'];
  const maxLengthArr = 3;
  const minLengthArr = 0;
  const randomOperatop = operatorArr[getRandomNumber(maxLengthArr, minLengthArr)];

  const dataForQuestion = `${randomNumberOne} ${randomOperatop} ${randomNumberTwo}`;
  const correctAnswer = String(calcExpresion(randomNumberOne, randomNumberTwo, randomOperatop));

  const getRoundData = [dataForQuestion, correctAnswer];

  return getRoundData;
};

const runCalcGame = () => runGameLogic(description, getCalcData);

export default runCalcGame;
