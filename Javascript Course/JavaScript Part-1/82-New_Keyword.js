// constructor function
function Users(firstname,lastname, email, age,address){
     this.firstName = firstname;
     this.lastName = lastname;
     this.email = email;
     this.age = age;
     this.address = address;
}

Users.prototype.about = function(){
     return `${this.firstName} is ${this.age} year old.`; 
     };
Users.prototype.is18 = function(){
          return this.age>=18;
};
Users.prototype.sing =  function(){
               return 'sdfasfasdfsFadf';
     };


const person1 = new Users('Ankit', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person2 =  new Users('Ankitfddsf', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person3 = new Users('Anksdfdfait', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
console.log(person1.is18())
console.log(person1.about())  
console.log(person1.sing())  
console.log(person2.about())
console.log(person1);



console.log(Users.prototype)