// Callback function

function myfunc2(){
     console.log('inside my func 2');
}

function myfunc(callback){
     console.log('hello world');
     // console.log(a);
     callback();
}

myfunc(myfunc2);