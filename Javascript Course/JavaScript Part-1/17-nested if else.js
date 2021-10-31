// nested if else 

let win=19;

let userguess = +prompt("Guess a number");

if (userguess === win){
     console.log("you are right!");
}else{
     if(userguess > win){
          console.log("You are too high!");
     }else{
          console.log("you are to Low!");
     }
}