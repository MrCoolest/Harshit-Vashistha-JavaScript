// promise
// future

console.log('script start');

const bucket = ['coffee','chips','vegetables', 'salt', 'rice'];

// console.log(bucket);
const friedRicePromise =  new Promise((resolve, reject) => {
     if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
          resolve('Fried Rice');
     }else{
          reject(new Error(`something misssing from ${bucket}`))
     }
})




// consume
// how to consume

// friedRicePromise.then((myfriderice)=>{
//      // jab promise resolve hoga
//      console.log('Lets eat :', myfriderice);
// },
// (error) => {
//      // jab promise resolve hoga   
//      console.log(error);
// })

setTimeout(()=>{
     console.log('Helloo From setTimeOut..!');
},0)

friedRicePromise.then((myfriderice)=>{
     // jab promise resolve hoga
     console.log('Lets eat :', myfriderice);
}).catch(
(error) => {
     // jab promise resolve hoga   
     console.log(error);
})


for(let i = 0; i <= 10000; i++){
     console.log(Math.random(), i);
}


console.log('script end');