// Getter and Setter

class Person{
     constructor(firstname, lastname, age){
          this.firstname = firstname;
          this.lastname = lastname;
          this.age = age;
     }
     static classinfo(){
          return `THis is Persons classs`;
     }
     static desc = 'Hello this is static var';
     get fullname(){
          return `${this.firstname} ${this.lastname}`
     }
     set fullname(fullname){
          const [firstname, lastname]= fullname.split(' ');
          this.firstname= firstname;
          this.lastname = lastname;
     }
     eat(){
          console.log("i'm Eating");
     }

}


const person1 = new Person('Ankit','Patwa',20);
person1.eat();


console.log(Person.classinfo());
console.log(Person.desc);
// console.log(person1.fullname);
// console.log(person1.firstname);
// console.log(person1.lastname);
// person1.fullname = 'Anuraaag sigu';
// console.log(person1.lastname);
// console.log(person1.firstname);
// console.log(person1.fullname);


