// class keyword

class CreateUser{
     // constructor function
     constructor(firstname,lastname, email, age,address){
          // console.log('Constructor Called');
          this.firstName = firstname;
          this.lastName = lastname;
          this.email = email;
          this.age = age;
          this.address = address;
     };

     about(){
          return `${this.firstName} is ${this.age} year old.`; 

     };

     is18(){
          return this.age>=18;
     };

     sing(){
          return 'sdfasfasdfsFadf';
     }

     func(a){
          console.log(a);
     }
}





const person1 = new CreateUser('Ankit', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person2 =  new CreateUser('Ankitfddsf', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person3 = new CreateUser('Anksdfdfait', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')

person1.func('Ankit bhai is best bhai');

console.log(person1.firstName);
console.log(person1.is18())
console.log(person1.about())  
console.log(person1.sing())  
// // console.log(person2.about())

console.log(Object.getPrototypeOf(person1));




