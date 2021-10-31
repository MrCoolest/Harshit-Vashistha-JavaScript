// Rest parameters

// function myfunc(a,b,...c){
//      console.log(`a is ${a}`);
//      console.log(`b is ${b}`);
//      console.log(`c is ${c}`);
// }

// myfunc(3,4,5,6,7,8,9);


const addall = (...b) => {
     let total = 0
     for (let i of b){
          total+=i;
     }
     return total
};

console.log(addall(1,2,3,4,5,6,7,8,9,10))