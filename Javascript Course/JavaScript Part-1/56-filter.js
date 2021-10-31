// filter methods

const numbers = [1,2,3,4,5,6,7,8,9,10];

const isEven = num=>num%2===0;
const isOdd = num=>num%2!==0;

const evenArray = numbers.filter(isEven);
const oddArray = numbers.filter(isOdd);
console.log(evenArray); 
console.log(oddArray); 