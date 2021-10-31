// how to clone Arrays

// how to concatenate two Arrays

let array1 = ["item1", 'item2'];
// let array2 = ["item1", 'item2'];
// let array2 = array1.slice(0).concat(['item4', 'item5']);
// let array2 = [].concat(array1); 


// new Way
// spread operator
let oneMoreArray = [1,23,5,4];
let array2 = [...array1,...oneMoreArray];


array1.push("item3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);
