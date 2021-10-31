// how to iterate objects

const person = {
     name : "Ankit",
     age : 20,
     "person hobbies" : ['memes','programming','Gym']
};

// for in loop
// object.keys

// for(let key in person){
//      console.log(`${key} : ${person[key]}`);
// }

// console.log(Object.keys(person));
// console.log(Array.isArray(Object.keys(person)));

for (let key of Object.keys(person)){
     console.log(key);
}