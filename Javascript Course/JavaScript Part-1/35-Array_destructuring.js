// array destructuring

const myArray = ['value1', 'value2','value3','value4'];

let [my1,my2, ...mynewarray] = myArray;
console.log(my1);
console.log(my2);
console.log(mynewarray);