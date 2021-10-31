console.log('Script Start..!');

const albtn = document.querySelectorAll('button');

albtn.forEach(function(btn){
     btn.addEventListener('click',(e) => {
          let num = 0;
          for(let i = 0; i<=100000000;i++){
               num+=i;
          }
          console.log(e.currentTarget.textContent, num);
     } )
})


let outernum = 0;
for(let i =0 ; i<=100000000; i++){
     outernum += i;
}
console.log("valur of Outernum is :", outernum);
console.log('Script End..!');
