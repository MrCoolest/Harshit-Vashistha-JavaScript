// This keyword inside eventListener callback

const btn =document.querySelector('.btn-headline');
// function func(){
//      console.log('you clicked me !!');
//      console.log(this);
// };
// btn.addEventListener('click',func)

const func = () => {
     console.log('you clicked me !!');
     console.log(this);
};
btn.addEventListener('click',func)