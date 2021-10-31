// Static method and properties

class Person{
     constructor(firstname, lastname, age){
          this.firstname = firstname;
          this.lastname = lastname;
          this.age = age;
     }

     get fullname(){
          return `${this.firstname} ${this.lastname}`
     }
     set fullname(fullname){
          const [firstname, lastname]= fullname.split(' ');
          this.firstname= firstname;
          this.lastname = lastname;
     }
}

