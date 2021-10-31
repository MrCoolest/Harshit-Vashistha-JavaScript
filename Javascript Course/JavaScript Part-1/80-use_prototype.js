// const usermethod = {
//      about : function(){
//      return `${this.firstName} is ${this.age} year old.`; 
//      },
//      is18 : function(){
//      return this.age>=18
//      },
//      sing : function(){
//           return 'sdfasfasdfsFadf';
//      }
// }


function users(firstname,lastname, email, age,address){
     const user = Object.create(users.prototype);
     user.firstName = firstname;
     user.lastName = lastname;
     user.email = email;
     user.age = age;
     user.address = address;
     return user;
}

users.prototype.about = function(){
     return `${this.firstName} is ${this.age} year old.`; 
     };
users.prototype.is18 = function(){
          return this.age>=18;
};
users.prototype.sing =  function(){
               return 'sdfasfasdfsFadf';
     };


const person1 =  users('Ankit', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person2 =  users('Ankitfddsf', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person3 =  users('Anksdfdfait', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
console.log(person1.is18())
console.log(person1.about())  
console.log(person1.sing())  
console.log(person2.about())
console.log(person1);



console.log(users.prototype)