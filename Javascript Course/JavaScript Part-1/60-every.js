// every method 
// const number = [2,4,6,8,10];

// let ans = number.every(num=>num%2===0);
// console.log(ans)



const userCart = [
     {prodId :1, productname : 'mobile', price:12000},
     {prodId :2, productname : 'laptop', price:22000},
     {prodId :3, productname : 'tv', price:15000}
];


const ans = userCart.every(user=>user.price<30000);

console.log(ans);