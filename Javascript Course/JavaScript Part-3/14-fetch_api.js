// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";


// console.log(check);

//  by default GET 
const check  = fetch(URL)
     .then(response => {
          // console.log(response)
          if(response.ok){
               return response.json();
          }else{
               throw new Error('Something went Wrong')
          }
     })
     .then(data => {
          console.log(data);
     })
     .catch(error => {
          console.log('inside catch');
          console.log(error);
     })


// Post method

const check1  = fetch(URL,
     {
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
     .then(response => {
          // console.log(response)
          if(response.ok){
               return response.json();
          }else{
               throw new Error('Something went Wrong')
          }
     })
     .then(data => {
          console.log(data);
     })
     .catch(error => {
          console.log('inside catch');
          console.log(error);
     })
