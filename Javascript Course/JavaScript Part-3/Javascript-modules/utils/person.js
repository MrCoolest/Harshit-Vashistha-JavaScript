
// person class
export class Person{
     constructor(firstname, lastname ,age){
          this.firstname = firstname;
          this.lastname = lastname;
          this.age = age;
     }

     info(){
          console.log(this.firstname, this.lastname, this.age);
     }
}

// cant do dublicate default
export class Person2{
     constructor(firstname, lastname ,age){
          this.firstname = firstname;
          this.lastname = lastname;
          this.age = age;
     }

     info(){
          console.log(this.firstname, this.lastname, this.age);
     }
}


const hello = 'Hello Everyone';
export default hello;