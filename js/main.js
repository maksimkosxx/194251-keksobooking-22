
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

  if(min >= 0 && min !== max){
    return getRandomNumber(min, max);
  }
}

const getRandomFractional = (min, max, signs) => {

  const result = Math.random() * (max - min) + min;

  if(min >= 0 && min !== max){
    return result.toFixed(signs);
  }
}

const author = {
  avatar: 'img/avatars/user0' + getRandomInteger(1, 8) +'.png',
}

const locationObj = {
  x: getRandomFractional(35.65, 35.70, 5),
  y: getRandomFractional(139.70, 139.80, 5),
}
const placeVariants = [
  'palace',
  'flat',
  'house',
  'bungalow',
]
const timeVariants = [
  '12:00',
  '13:00',
  '14:00',
]
const featuresVariants = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]
const photosVariants = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

// eslint-disable-next-line no-undef
const getArrayIndex = array => getRandomInteger(0, array.length - 1);

const offer = {
  title: 'Информация об объекте',
  address: `${locationObj.x}` +',' + `${locationObj.y}`,
  price: getRandomInteger(1, 10000),
  type: placeVariants[getArrayIndex(placeVariants)],
  rooms: getRandomInteger(1, 100),
  guests: getRandomInteger(1, 100),
  checkin: timeVariants[getArrayIndex(timeVariants)],
  checkout: timeVariants[getArrayIndex(timeVariants)],
  features: featuresVariants.slice(0, getArrayIndex(featuresVariants)),
  description: 'Информация об объекте',
  photos: photosVariants[getArrayIndex(photosVariants)],
}
