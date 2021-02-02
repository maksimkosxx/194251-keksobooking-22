

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if(min >= max){
    alert('Значение min должно быть меньше max')
    return undefined;

  } else if(min < 0) {
    alert('Значение min должно быть больше либо равно 0')
    return undefined;

  } else if(max < 0) {
    alert('Значение max должно быть больше либо равно 0')
    return undefined;

  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
getRandomInteger(1, 10);

const getRandomFractional = (min, max, signs) => {

  const result = (Math.random() * (max - min + 1) + min);

  if(min >= max){
    alert('Значение min должно быть меньше max')
    return undefined;

  } else if(min < 0) {
    alert('Значение min должно быть больше либо равно 0')
    return undefined;

  } else if(max < 0) {
    alert('Значение max должно быть больше либо равно 0')
    return undefined;

  } else {
    return result.toFixed(signs);
  }
}
getRandomFractional(1, 10, 2);
