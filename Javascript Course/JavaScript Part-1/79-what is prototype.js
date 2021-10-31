// What is prototype
function hello(){
     console.log('hello world');
}

// const hello = {key : 'value'}
// console.log(hello.name);

// we can add our Properties
hello.myOwnProperty = "This is my property";
console.log(hello.myOwnProperty);

console.log(hello.prototype);

// only functions provides prototype property

// if(hello.prototype){
//      console.log('prototype is present');
// }else{
//      console.log('prototype is not present')
// }

// hello.prototype.abc = 'abc';
// hello.prototype.xyz = 'xyz';
// hello.prototype.sing = function(){
//      return 'lalalalalla'
// }
// console.log(hello.prototype);
// console.log(hello.prototype.sing());