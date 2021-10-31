// Map method 
const numbers = [3,4,5,6,7,8];

const square = function(number){
     return number * number
}

// console.log(numbers.map(square))

// const squarenum = numbers.map(num=>num*num )
// console.log(squarenum);


const users = [
     {firstname:'Ankit', age :20},
     {firstname:'Anuraag', age :21},
     {firstname:'Atharva', age :24},
     {firstname:'Dinesh', age :23},
];

const f_name = users.map(user=>user.firstname);
console.log(f_name);