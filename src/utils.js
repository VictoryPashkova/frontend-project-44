// генератор случайных чисел

const getRandomNumber = (min = 50, max = 2) => {
  const randomNumberOne = Math.floor(Math.random() * (max - min)) + min;
  return randomNumberOne;
};

export default getRandomNumber;
