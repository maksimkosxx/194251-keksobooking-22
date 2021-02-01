

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if(min >= max){
    alert('Значание min должно быть меньше max')
    return undefined;

  } else if(min < 0) {
    alert('Значание min должно быть больше либо равно 0')
    return undefined;

  } else if(max < 0) {
    alert('Значание max должно быть больше либо равно 0')
    return undefined;

  } else return Math.floor(Math.random() * (max - min + 1) + min);

}

const getRandomFractional = (min, max) => {

  if(min >= max){
    alert('Значание min должно быть меньше max')
    return undefined;

  } else if(min < 0) {
    alert('Значание min должно быть больше либо равно 0')
    return undefined;

  } else if(max < 0) {
    alert('Значание max должно быть больше либо равно 0')
    return undefined;

  } else return Math.random() * (max - min + 1) + min;

}
// eslint-disable-next-line no-console
console.log(getRandomInteger(0, 5));
// eslint-disable-next-line no-console
console.log(getRandomFractional(1.5, 5.5));
