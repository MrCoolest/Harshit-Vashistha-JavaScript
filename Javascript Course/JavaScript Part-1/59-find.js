// find method

// const myArray = ['HEllo','cat', 'dog', 'lion'];

// function islen(string){
//      return string.length === 3;
// }

// const ans = islen('Ankit')
// console.log(ans)

// const ans = myArray.find(islen);
// console.log(ans)


const users = [
     {userid : 1, username : 'Ankit'},
     {userid : 2, username : 'Saloni'},
     {userid : 3, username : 'krutika'},
     {userid : 4, username : 'Atharva'},
     {userid : 5, username : 'Anuraag'},
     {userid : 6, username : 'Dinesh'}
];

let num = 3;

const ans = users.find((user)=>user.userid===num);
console.log(ans);

