// key press
// mouse hover
const body = document.body;

// body.addEventListener('keypress', (e)=>{
//      console.log(e.key);
// })

const btn = document.querySelector('.btn-headline');

btn.addEventListener('mouseover', ()=>{
     console.log("mouseover event is Occured!!");
})
btn.addEventListener('mouseleave', ()=>{
     console.log("mouseleave event is Occured!!");
})
