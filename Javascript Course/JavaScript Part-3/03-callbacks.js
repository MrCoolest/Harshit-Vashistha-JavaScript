// understand callback

// function  myfunc(callback){
//      console.log('function is doing some task');
//      callback();
// };


// myfunc(()=>console.log('function is doing task 2'));
// myfunc2();


function getTwoNumber(num1, num2, onSuccess, onFailure){
     if(typeof num1 === "number" && typeof num2 === "number"){
          onSuccess(num1,num2)
          console.log(num1, num2)
     }
     else{
          onFailure();
     }
}

getTwoNumber(6,5, (num1, num2) => console.log(num1+num2), () => console.log('wrong input'));