// let navItems = document.getElementsByTagName('a');
// console.log(navItems);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));


// simple/tradtional for loop
// for of loop

// traditional loop
// for(let i = 0 ; i < navItems.length ;i++){
//      // console.log(navItems[i]);
//      const navItem = navItems[i];
//      navItem.style.backgroundColor = 'White';          
//      navItem.style.color = 'black';          
//      navItem.style.fontWeight = 'bold';          
     
// }


// for(let item of navItems){
//      item.style.color = '#000';
//      item.style.backgroundColor = 'White';
//      console.log(item);
// }

// Converting HtmlCollection to Array
// {
// navItems = Array.from(navItems);
// console.log(navItems);

// navItems.forEach(item => {
//      item.style.color = '#000';
//      item.style.backgroundColor = 'White';
//      console.log(item);
// });
// }


let navItems = document.querySelectorAll('a');
console.log(navItems);

navItems.forEach(item => {
          item.style.color = '#000';
          item.style.backgroundColor = 'White';
          console.log(item);
     });

// Converting Node to Array
navItems = Array.from(navItems);
console.log(navItems);