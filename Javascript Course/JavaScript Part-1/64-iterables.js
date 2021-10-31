// iterables
// jispe hum for of loop laga sake
// string , array are iterables

// strings
// const firstname = "Bhagwan";
// for (let char of firstname){
//      console.log(char);
// }


// arrays
// const items = ['item1','item2', 'item3'];
// for (let item of items)
//      console.log(item);


// objects <--- Not Iterable
// const users = {key1 : 'value1', key2 : 'value2', key3 : 'value3'}
// for(let user of users){
//      console.log(user.key1)
// }




// array like object
// jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai
// example :- string

const firstname = "Ankit";
console.log(firstname.length);
console.log(firstname[3]);