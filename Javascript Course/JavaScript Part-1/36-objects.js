// Objects
// objects are reference type
// arrays are good but not sufficient for real world data
// objects stores keys value pairs
// objects don't have index

// how to create objects

// const person = {name : "Ankit", age : 20};
const person = {
     name : "Ankit",
     age : 20,
     hobbies : ['memes','programming','Gym']
};
console.log(person);

// hoe to access data from objects
console.log(person.name)
console.log(person['name'])
console.log(person.age)
console.log(person.hobbies)

// how to add key value pair to objects
person.gender = "male";
person['college'] = "MKMP"
console.log(person)