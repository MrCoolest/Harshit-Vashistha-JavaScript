// class practice

class Animal{
     constructor(name, age){
          this.name = name;
          this.age = age;
     }

     eat(){
          console.log("i'm Eating");
     }

     animal_voice(voice){
          console.log(`${this.name} says ${voice}`);
     }
}

const cat = new Animal('Cattyy',3);

console.log(cat)
cat.eat()
cat.animal_voice('meaawww')

class Dog extends Animal{
    constructor(name, age, speed){
         super(name, age)
         this.speed = speed;
    }

    run(){
         return `${this.name} is runnig at ${this.speed}'s speeds.`
    }
}    

const rockey = new Dog('rockey', 5,56);
console.log(rockey);
console.log(rockey.run());
rockey.eat();

rockey.animal_voice('bhawww')