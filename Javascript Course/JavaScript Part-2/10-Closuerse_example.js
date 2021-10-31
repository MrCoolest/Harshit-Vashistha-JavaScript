// function myFunction(power){
//      return function(number){
//           return number ** power;
//      }
// }


// const cube = myFunction(3);
// // console.log(cube());
// const ans = cube(2);
// console.log(ans);



function func(){
     let counter = 0;
     return function(){
          if(counter === 0){
               console.log("Hi you called me!")
               counter+=1;
          }else{
               console.log('Mai already call hoo chuka hu!!')
          }
     }
}


const myfunc = func();
myfunc();
myfunc();