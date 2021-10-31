const obj = {
     key1 : 'value1',
     key2 : 'value2',
}

// const obj2 = {
//      // key3 : 'value3'
// }

// _proto_ 
// in Official ecmascript documentation
// [[prototype]]

//__proto__ , [[prototype]]

// prototype

const obj2 = Object.create(obj);
obj2.key3 = 'vlaue3';
console.log(obj2) 
console.log(obj2.__proto__)  