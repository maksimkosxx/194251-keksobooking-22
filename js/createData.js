
const createData = (func, length) => {

  let bookingCollection = [];

  for(let i = 0;i <= length - 1;i++){
    bookingCollection.push(func());
  }
  return bookingCollection;
}
export default createData;

