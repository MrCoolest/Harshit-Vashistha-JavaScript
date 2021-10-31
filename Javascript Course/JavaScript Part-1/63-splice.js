// splice method
// start, delete, insert

const myArray = ['item1','item2','item3'];

// delete
// const deleted = myArray.splice(1,1);
// console.log(deleted);
// console.log(myArray);

// insert
// myArray.splice(1,0,'val2');
// console.log(myArray);

// insert and delete 
const deleted = myArray.splice(1,1,'val2');
console.log(deleted);
console.log(myArray);
