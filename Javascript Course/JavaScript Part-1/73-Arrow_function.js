// arrow function

const user1 = {
     firstname : 'Ankit',
     age :20,
     about : ()=>{
          console.log(this.firstname , this.age)
     }
}


user1.about();