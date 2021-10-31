// Reduce Method

const numbers = [1,2,3,4,5,6,7,8,9,10];


// const SumOfAll = numbers.reduce((accumulator, currentValue)=> { return accumulator+currentValue;});
// console.log(SumOfAll);


const userCart = [
     {prodId :1, productname : 'mobile', price:12000},
     {prodId :2, productname : 'laptop', price:22000},
     {prodId :3, productname : 'tv', price:15000}
];

const total = userCart.reduce((totalprice, curruntprod)=>{
     return totalprice+ curruntprod.price;
},0);

console.log(total);