
const getRandomNumber = (min, max) => {
  const usedIndexes = new Set();
  const newNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (usedIndexes.has(newNumber)) {
    return this.getRandomNumber(min, max);
  } else {
    usedIndexes.add(newNumber);
    return newNumber;
  }
}

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && min !== max) {
    return getRandomNumber(min, max);
  }
}

const getRandomFractional = (min, max, signs) => {
  const result = Math.random() * (max - min) + min;
  if (min >= 0 && min !== max) {
    return result.toFixed(signs);
  }
}

const getArrayIndex = array => getRandomInteger(0, array.length - 1);


export { getRandomInteger, getRandomFractional, getArrayIndex }
