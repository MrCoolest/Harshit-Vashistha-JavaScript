// important arrays methods

// foreach
// map
// filter
// reduce

// const numbers = [2,3,4,5,6];

// function multiof2(number, index){
//      console.log('index of', index);
//      console.log(`${number} x 2 = ${number*2}`);
// }

// multiof2(numbers[2],2)

// for(let i in numbers){
//      multiof2(numbers[i],i);
// }

// numbers.forEach(multiof2);


const users = [
     {firstname:'Ankit', age :20},
     {firstname:'Anuraag', age :21},
     {firstname:'Atharva', age :24},
     {firstname:'Dinesh', age :23},
]

// users.forEach(({firstname: name, age :a})=>{
//    console.log(name,a)
// })

// short hand
users.forEach( user => console.log(user.firstname));


// with of loop
// for (let user of users){
//      console.log(user.firstname)
// }