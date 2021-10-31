// spread operator

const array1 = [1,2,3];
const array2 = [5,6,9];

// const newArray = [...array1,...array2];
// const newArray = [...'Ankit'];
// console.log(newArray);

const obj1 = {
     key1 : "value1",
     key2 : "value2"
};
const obj2 = {
     key1 : "uniqeValue",
     key3 : "value3",
     key4 : "value4"
};

// const newObject = {...obj1, ...obj2, key69: "vlaue69"};

const newObject = {...'abc'};

console.log(newObject);