// litil practice with click

const albtn = document.querySelectorAll('button');

albtn.forEach(function(btn){
     btn.addEventListener('click',function(){
          // document.getElementsByTagName('body')[0].style.backgroundColor = 'Yellow';
          btn.style.color = 'gray';
          btn.style.backgroundColor = 'yellow';
     })
})

