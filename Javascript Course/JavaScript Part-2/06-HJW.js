// function execution context

let foo = "foo";
console.log(foo);
function getFullName(firstname, lastname){
     console.log(arguments);
     let myVar = "var inside funct";
     console.log(myVar);
     const fullname = firstname + " " + lastname;
     return fullname; 
}

const personName = getFullName('harshit', 'sharma');
console.log(personName);