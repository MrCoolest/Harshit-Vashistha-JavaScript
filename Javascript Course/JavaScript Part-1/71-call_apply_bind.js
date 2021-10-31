// call ,apply and bind

// function hello(){
//      console.log("hello world");
// }

// hello.call();

const about = function(hobby, favsinger){
     console.log(this.firstname , this.age,hobby , favsinger)
}

const user1 = {
     firstname : 'Ankit',
     age :20,
     
}
const user2 = {
     firstname : 'Anuraag',
     age :21
}


// call
// about.call(user1, 'Programming', 'Honeysing');
// about.call(user2,'memes','arjit');


// aplly
// about.apply(user1,['Programming', 'Honeysing'])

// bind
const func = about.bind(user1, 'Programming', 'Honeysing');

func();

