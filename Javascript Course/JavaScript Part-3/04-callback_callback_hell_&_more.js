// callbacks, callbacks hell, pyramid of doom
// asynchronous programming
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


// callback hell
setTimeout(()=>{
     heading1.innerHTML = 'one';
     heading1.style.color = 'violet';
     setTimeout(()=> {
          heading2.textContent = 'two';
          heading2.style.color = 'purple';
          setTimeout(()=> {
               heading3.textContent = 'three';
               heading3.style.color = 'red';
               setTimeout(()=> {
                    heading4.textContent = 'four';
                    heading4.style.color = 'pink';
                    setTimeout(()=> {
                         heading5.textContent = 'five';
                         heading5.style.color = 'green';
                         setTimeout(()=> {
                              heading6.textContent = 'six';
                              heading6.style.color = 'blue';
                              setTimeout(()=> {
                                   heading7.textContent = 'seven';
                                   heading7.style.color = 'brown';
                              },1000)
                         },3000)
                    },2000)
               },1000)
          },2000)
     },2000)
},1000)

// pyramid of doom

function changetext(element, text, color, time,onSuccess, onFailure){
     setTimeout(()=>{
          if(element){
               element.textContent = text;
               element.style.color = color;
               if(onSuccess){
                    onSuccess();
               }
          }else{
               if(onFailure){
                    onFailure();
               }
          }
     },time);
};

changetext(heading1,'one', 'violet', 1000,()=>{
     changetext(heading2,'two', 'purple', 2000,()=>{
          changetext(heading3,'three', 'red', 2000,()=>{
               changetext(heading4,'four', 'pink', 1000,()=>{
                    changetext(heading5,'five', 'green', 2000,()=>{
                         changetext(heading6,'six', 'blue', 1000,()=>{
                              changetext(heading7,'seven', 'brown', 2000,()=>{
                                   changetext(heading8,'eight', 'cyan', 4000,()=>{
                                        changetext(heading9,'nine', 'grey', 3000,()=>{
                                             changetext(heading10,'ten', 'orangered', 5000,()=>{
     
                                             }, ()=>{
                                                  console.log('heading10 is not exists')
                                             });
                                        }, ()=>{
                                             console.log('heading9 is not exists')
                                        });
                                   }, ()=>{
                                        console.log('heading8 is not exists')
                                   });
                              }, ()=>{
                                   console.log('heading7 is not exists')
                              });
                         }, ()=>{
                              console.log('heading6 is not exists')
                         });
                    }, ()=>{
                         console.log('heading5 is not exists')
                    });
               }, ()=>{
                    console.log('heading4 is not exists')
               });
          }, ()=>{
               console.log('heading3 is not exists')
          });
     }, ()=>{
          console.log('heading2 is not exists')
     });
}, ()=>{
     console.log('heading1 is not exists')
});