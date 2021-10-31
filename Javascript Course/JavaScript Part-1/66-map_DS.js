// Maps
// map is an iterables

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// differnt between maps and objects

// objects can only have string or symbols as key

// in map you can use anything as key like array, number, string

// const person = {
//      firstname : 'Ankit',
//      age : 20,
//      1 : 'one'
// }

// console.log(person)

// for(let per in person){
//      console.log(typeof per)
// }


// key value pair 
// const person = new Map();
// person.set('firstname' , 'Ankit'); 
// person.set('age', '7'); 
// person.set(1 ,'one'); 
// person.set(['23',5],'onetwofive'); 

// console.log(person);
// console.log(person.get('firstname'));
// console.log(person.get(1));
// console.log(person.keys());

// // for (let key of person.keys())
// //      console.log(key, typeof key);

// for (let [key,value] of person)
//      console.log(key ,':', value);


const per1 = {
     id :1,
     firstname : 'Ankit'
};
const per2 = {
     id :1,
     firstname : 'Anuraag'
};

const userinfo = new Map();
userinfo.set(per1, {age :8 , gender : 'male'});
userinfo.set(per2, {age :9 , gender : 'male'});
console.log(userinfo);
console.log(userinfo.get(per1));
console.log(userinfo.get(per2));

// const person = new Map([['firstname', 'Ankit'], ['age' , 7]]);
// console.log(person);