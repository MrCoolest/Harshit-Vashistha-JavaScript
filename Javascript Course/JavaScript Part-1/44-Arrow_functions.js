// Arrow functions => 




const singHappyBirthday = () => {
     console.log("Happpy birthday to you .......");
}

singHappyBirthday();
singHappyBirthday();



// this is Arrow function
const sumthreeNumbers = (a,b,c) =>{
          return a+b+c;
}

console.log(sumthreeNumbers(4,7,6))

// this is shorthand of Arrow function
const isEven = num => num%2===0;

console.log(isEven(8))

const firstChar = s =>  s[0];

console.log(firstChar("Ankit"))

const findtarget = (arr, tar) => {
     for (let i in arr){
          if(arr[i]===tar){
               return i; 
          }
     }
     return -1;
}

console.log(findtarget([2,3,4,5,6,43],3))
