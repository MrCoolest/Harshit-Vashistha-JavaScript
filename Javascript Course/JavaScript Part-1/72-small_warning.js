// don't do this mistakes


const user1 = {
     firstname : 'Ankit',
     age :20,
     about : function(){
          console.log(this.firstname , this.age)
     }
}

const myfunc = user1.about.bind(user1);
myfunc(); 