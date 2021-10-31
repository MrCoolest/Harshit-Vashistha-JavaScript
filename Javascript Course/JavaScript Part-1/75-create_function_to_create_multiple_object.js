// const user = {
//      firstName : 'Ankit',
//      lastName : 'Patwa',
//      email : 'Ankitpatwa2141@gmail.com',
//      age : 2,
//      address : '104, Molarband, kajoor road',
//      about : function(){
//           return `${this.firstName} is ${this.age} year old.`;
//      },
//      is18 : function(){
//           return this.age>=18
//      }
// }


function users(firstname,lastname, email, age,address){
     const user = {};
     user.firstName = firstname;
     user.lastName = lastname;
     user.email = email;
     user.age = age;
     user.address = address;
     user.about = function(){
          return `${this.firstName} is ${this.age} year old.`;
     },
     user.is18 = function(){
          return this.age>=18
     }
     
     return user;
}


const person1 =  users('Ankit', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
console.log(person1.is18())
console.log(person1.about())
console.log(person1);
