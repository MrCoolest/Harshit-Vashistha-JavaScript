// Object inside Arrays
// very usefull in real life Applications

const users = [
     {userId : 1, firstName : 'Ankit', age :20},
     {userId : 2, firstName : 'Anuraag', age : 21},
     {userId : 3, firstName : 'Dinesh', age : 22},
]

for (let user of users){
     console.log(user);
}

const [{firstName : user1firstname , userid}, , {age}] = users;
console.log(user1firstname);
console.log(userid);
console.log(age);