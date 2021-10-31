// promise resolve
// promise chaning


// one way
// const myPromise = Promise.resolve(5);

// myPromise.then( value => console.log(value));

// 2nd way
// Promise.resolve(5).then( value => console.log(value));



// third way

function myPromise(){
     return new Promise((resolve, reject)=>{
          resolve('foo');
     })
}

myPromise().then(val => {
     console.log(val);
     val+= 'Bar';
     return val;
}).then((val) => {
     console.log(val);
     val+= 'Baaz'
     return val
}).then((val) => {
     console.log(val);
})