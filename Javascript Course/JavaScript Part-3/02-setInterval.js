// setInterval

// console.log('Script start')

// setInterval(() =>{
//      console.log(Math.random());
// }, 1000);

// setInterval(() =>{
//      let total = 0;
//      for(let i = 0; i<=10000000; i++)
//           total+=i;
//      console.log(total);     
//      console.log(Math.random());
// }, 500);

// console.log('Script end')



// background color change in every one second

const body = document.body;

function genrateRandomColor(){
     const red = Math.floor(Math.random()*256);
     const green = Math.floor(Math.random()*256);
     const blue = Math.floor(Math.random()*256);
     const randomColor = `rgb(${red}, ${green}, ${blue})`;
     return randomColor;
}

const id = setInterval(() => body.style.backgroundColor = genrateRandomColor(),1000);

const button = document.querySelector('button');

button.addEventListener('click',()=>{
     clearInterval(id);
})
