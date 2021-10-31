const usermethod = {
     about : function(){
     return `${this.firstName} is ${this.age} year old.`; 
     },
     is18 : function(){
     return this.age>=18
     }
}


function users(firstname,lastname, email, age,address){
     const user = {};
     user.firstName = firstname;
     user.lastName = lastname;
     user.email = email;
     user.age = age;
     user.address = address;
     user.about = usermethod.about
     user.is18 = usermethod.is18
     return user;
}




const person1 =  users('Ankit', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person2 =  users('Ankitfddsf', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
const person3 =  users('Anksdfdfait', 'Patwa', 'eamil@gmail.com', 20, 'Ankitpatwa ka gharr, patwa colony, ayodhya!')
console.log(person1.is18())
console.log(person1.about())
console.log(person2.about())
console.log(person1);
