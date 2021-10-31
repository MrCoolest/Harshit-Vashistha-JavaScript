const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

// console.log(xhr.readyState);
// step 1: 
xhr.open('GET', url);
// console.log(xhr.readyState);

// xhr.onreadystatechange = function(){
//      // console.log(xhr.readyState);
//      if(xhr.readyState === 4){
//           // console.log(typeof xhr.response);
//           console.log(xhr.response);
//           const response = xhr.response 
//           const data = JSON.parse(response);
//           console.log(data)
//           console.log(typeof data)

//      }
// }



xhr.onload = function(){
     // console.log(xhr.readyState)
     const response = xhr.response 
     const data = JSON.parse(response);
     console.log(data)
     console.log(typeof data)

}


xhr.send();


