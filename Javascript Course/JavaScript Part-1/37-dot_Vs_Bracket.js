// difference betweem dot and bracket notation
const key = "email";
const person = {
     name : "Ankit",
     age : 20,
     "person hobbies" : ['memes','programming','Gym']
};

// console.log(person.person hobbies) (invalid)
// console.log(person["person hobbies"]) (valid)


person[key] = "Ankitpatwa2141@gmail.com";
console.log(person);