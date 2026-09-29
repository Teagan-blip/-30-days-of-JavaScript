
// non-primitive datatypes: Arrays and Objects
// mutable
// the values of non-primitive data types cannot be compared by value. Even if values are identical, they are not strictly equal.

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums === numbers);  //false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false


// Never compare: arrays, functions, or objects
//Two objects are only equal if they refer to the same underlying object

