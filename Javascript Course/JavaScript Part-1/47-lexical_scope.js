// Lexical Scope

const myVar = "value1";
function myApp(){
     
     function myFunc(){
          // const myVar = 'Value2';
          const myFunc2 = ()=>{
               console.log("inside myFunc",myVar);
          }
          myFunc2();
     }

     console.log(myVar)
     myFunc();
}

myApp();