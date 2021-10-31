// methods
// function inside objects

// const person = {
//      firstname : 'Ankit Patwa',
//      age : 20,
//      about : function(){
//           console.log(`person name is ${this.firstname} and age is ${this.age}`)
//           // console.log(this);
//      }
// }

const personinfo = function(){
     console.log(`person name is ${this.firstname} and age is ${this.age}`)
     // console.log(this);
}


const person = {
     firstname : 'Ankit Patwa',
     age : 20,
     about : personinfo
}
const person2 = {
     firstname : 'Anuraag sigu',
     age : 21,
     about : personinfo
}

person.about();
person2.about();