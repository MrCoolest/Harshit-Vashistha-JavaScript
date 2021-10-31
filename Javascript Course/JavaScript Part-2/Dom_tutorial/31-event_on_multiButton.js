const allButton = document.querySelectorAll('.mybuttons button');

console.log(allButton)

// firstButton.addEventListener('click', function(){
//      console.log('you clicked me!!');
// });

// for (let btn of allButton){
//      // console.log(btn)
//      btn.addEventListener('click', function(){
//      console.log(this.textContent);
// });

// }

allButton.forEach(function(btn){
     btn.addEventListener('click', function(){
               console.log(this.textContent);
     });
})