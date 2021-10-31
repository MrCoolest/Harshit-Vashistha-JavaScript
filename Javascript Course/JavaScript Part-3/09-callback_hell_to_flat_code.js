// callback hell to flat code js


const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');



function changetext(element, text, color,time){
     return new Promise((resolve, reject) => {
          setTimeout(()=>{
               if(element){
                    element.textContent = text;
                    element.style.color = color;
                    resolve();
                    }else{
                    reject('Element not found');
               }
     },time)
})
}

changetext(heading1, 'one', 'red', 1000)
     .then(()=>changetext(heading2, 'two', 'purple', 2000))
     .then(()=>changetext(heading3, 'three', 'yellow', 2000))
     .then(()=>changetext(heading4, 'four', 'orange', 2000))
     .then(()=>changetext(heading5, 'five', 'pink', 1000))
     .then(()=>changetext(heading6, 'six', 'brown', 3000))
     .then(()=>changetext(heading7, 'seven', 'cyan', 1000))
     .then(()=>changetext(heading8, 'eight', 'grey', 1000))
     .then(()=>changetext(heading9, 'nine', 'orangered', 1500))
     .then(()=>changetext(heading10, 'ten', 'blue', 2000))
     .catch((error)=>alert(error));