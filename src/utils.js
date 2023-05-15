// генератор случайных чисел

const randomOne = () => {
  const randomNumberOne = Math.floor(Math.random() * (50 - 15)) + 15;
  return randomNumberOne;
};

const randomTwo = () => {
  const randomNumberTwo = Math.floor(Math.random() * (50 - 15)) + 15;
  return randomNumberTwo;
};

export { randomOne, randomTwo };
