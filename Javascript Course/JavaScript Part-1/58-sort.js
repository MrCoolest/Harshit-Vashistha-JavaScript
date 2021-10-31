// Sort method

const numbers = [5,3,2,33,4,22,455]
numbers.sort((a,b)=>a-b);
console.log(numbers);



// const username = ['dsfad','asfda', 'Ankit', 'Anuraag', 'kamlesh'].sort()

// console.log(username)

const products = [
     {prodid : 1, productName: 'p1', price : 300},
     {prodid : 2, productName: 'p2', price : 1300},
     {prodid : 3, productName: 'p3', price : 200},
     {prodid : 4, productName: 'p4', price : 1200},
     {prodid : 5, productName: 'p5', price : 370},
     {prodid : 6, productName: 'p6', price : 1230},
]

const sortprod = products.slice(0).sort((a,b) => a.price - b.price);
console.log(products);
console.log(sortprod);
