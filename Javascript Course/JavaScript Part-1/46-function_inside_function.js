// Functions inside function

const app = ()=>{
     const myfunc = ()=>{
          console.log("hello from my func");
     }

     const sumofnum = (a,b) => a+b;

     const mul = (a,b) => a*b;

     console.log("inside app");
     
     myfunc();
     console.log(sumofnum(5,6));
     console.log(mul(5,6));
}

app();