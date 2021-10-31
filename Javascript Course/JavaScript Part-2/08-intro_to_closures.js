// Closures

// function can return functions
// function outerFunc(){
//      function innerFunction(){
//           console.log('Hello world');
//      }
//      return innerFunction;
// }

// const ans = outerFunc();
// console.log(ans);

// ans();

function printfullName(first,last){
     function printname(){
          console.log(first, last);
     }
     return printname;
}

const ans = printfullName('Ankit', 'Patwa');
console.log(ans);

ans();
