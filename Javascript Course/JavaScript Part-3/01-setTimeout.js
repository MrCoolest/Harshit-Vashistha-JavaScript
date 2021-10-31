// synchronous programing Vs asynchronous Programing

// synchronous programing

// console.log("Script start");

// for(let i = 0; i<=1000;i++){
//      console.log("inside for loop");
// }

// console.log("script end");



// function live(val){
//      console.log(val);
// }


// asynchronous programming


// setTimeout
console.log("script start..");

function hello(){
     console.log("hello world!")
}

const id1 = setTimeout(hello,4000);
const id2 = setTimeout(()=> console.log("hello bhai"),1000);

for(let i = 0; i<=100;i++){
     console.log("inside for loop");
}

console.log('clear timeout of id 1', id1);
clearTimeout(id1)
console.log(id1, id2)
console.log("script end");



