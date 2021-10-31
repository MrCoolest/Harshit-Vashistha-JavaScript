// function retunring a Promise


const bucket = ['coffee','chips','vegetables', 'salt', 'rice'];


function ricePromise(){
     return new Promise((resolve, reject) => {
          if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
               resolve('Fried Rice');
          }else{
               reject(new Error(`something misssing from ${bucket}`))
          }
     })
}


ricePromise().then((myfriderice)=>{
     // jab promise resolve hoga
     console.log('Lets eat :', myfriderice);
}).catch(
(error) => {
     // jab promise resolve hoga   
     console.log(error);
})


