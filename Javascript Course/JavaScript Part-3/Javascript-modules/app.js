// console.log('hello world')

import {firstname} from './utils/fname.js';
import {age} from './utils/age.js';
import something, {Person,Person2}  from './utils/person.js';

// import P  from './utils/person.js';


console.log(firstname, age);

console.log(something);

const person = new Person("Ankit", 'patwa', 20);
person.info()
const person2 = new Person2("Akit", 'patwa', 20);
person2.info()