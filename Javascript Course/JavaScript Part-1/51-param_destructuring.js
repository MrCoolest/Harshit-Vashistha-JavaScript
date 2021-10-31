// params destructuing

// object
// most use in react

const person = {
     firstname : "Ankit",
     age : 20
}

// function printDetails(obj){
//      console.log(obj.firstname);
//      console.log(obj.age);
// }

function printDetails({firstname, age}){
     console.log(firstname);
     console.log(age);
}




printDetails(person)