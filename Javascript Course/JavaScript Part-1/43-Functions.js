// functions

// function singHappyBirthday(){
//      console.log("Happpy birthday to you .......");
// }
const singHappyBirthday = function(){
     console.log("Happpy birthday to you .......");
}

singHappyBirthday();
singHappyBirthday();

// this is functions Declations
// function sumthreeNumbers(a,b,c){
//      return a+b+c;
// }


// this is functions expressions
const sumthreeNumbers = function(a,b,c){
          return a+b+c;
}

console.log(sumthreeNumbers(4,7,6))

function isEven(num){
     return num%2===0;
}

console.log(isEven(7))

function firstChar(s){
     return s[0]
}

console.log(firstChar("Ankit"))

function findtarget(arr, tar){
     for (let i in arr){
          if(arr[i]===tar){
               return i; 
          }
     }
     return -1;
}

console.log(findtarget([2,3,4,5,6,43],3))
