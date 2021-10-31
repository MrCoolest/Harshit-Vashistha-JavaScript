// some method

const number = [3,5,8,9];

// any number is even
console.log(number.some(num=>num%2===0));



const userCart = [
     {prodId :1, productname : 'mobile', price:12000},
     {prodId :2, productname : 'laptop', price:22000},
     {prodId :3, productname : 'tv', price:15000}
];

console.log(userCart.some(user=>user.price>20000));