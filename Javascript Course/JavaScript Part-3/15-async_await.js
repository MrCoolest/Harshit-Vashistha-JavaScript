// async awit

const URL = "https://jsonplaceholder.typicode.com/posts";


// fetch(URL)
//      .then((response) => {
//           if(response.ok){
//                return response.json();
//           }else{
//                throw new Error('Something is wrong with Api');
//           }
//      })
//      .then(data => {
//           console.log(data);
//      })
//      .catch((error)=>{
//           console.log(error);
//      })

async function getPosts(){
     const response  = await fetch(URL);
     if(!response.ok){
          throw new Error('Something is wrong!')
     }
     const data = await response.json();
     // console.log(response);
     return data;
}

getPosts()
     .then(myData => console.log(myData))
     .catch(error => {
          console.log("inside Catch!");
          console.log(error);
     })
