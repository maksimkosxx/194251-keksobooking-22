
const createData = (obj, length) => {

  let bookingCollection = [];

  for(let i = 0;i <= length - 1;i++){
    bookingCollection.push(obj());
  }
  return bookingCollection;
}
export default createData;

