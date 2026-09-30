/*
++++ Truthy values
    All numbers(positive and negative) are truthy except zero
    All strings are truthy except an empty string ('')
    The boolean true

++++ Falsy values
    0
    0n
    null
    undefined
    NaN
    the boolean false
    '', "", ``, empty string

*/



console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same



// && ampersand operator example  - True only uf the two operands are true e.g. is over 18 and is a member &&

let check = 4 > 3 && 10 > 5         // true && true -> true
 check = 4 > 3 && 10 < 5         // true && false -> false
 check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example  - True if either operand is true  e.g. has a ticket or is under 10yrs (kids get in free)

 check = 4 > 3 || 10 > 5         // true  || true -> true
 check = 4 > 3 || 10 < 5         // true  || false -> true
 check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples  - Negaties true to false, and false to true

 check = 4 > 3                     // true
 check = !(4 > 3)                  //  false
let isLightOn = true
 isLightOff = !isLightOn           // false
isMarried = !false                // true


//   Increment and decrement operators

//pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

// post-increment
count = 0
console.log(count++)        // 0
console.log(count)          // 1

// pre-decrement
count = 0
console.log(--count) // -1
console.log(count)  // -1

// post-increment
counter = 0
console.log(count--) // 0
console.log(count)   // -1


// Ternary operator - good for writing condisitonals

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
    // You need a rain coat.

isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
    // No need for a rain coat.

let didPass = true;

didPass
    ? console.log("Congratulations. You Passed!")
    : console.log("We are sorry to inform you that you have failed");

didPass = true

didPass = false
didPass
    ? console.log("Congratulations. You Passed!")
    : console.log("We are sorry to inform you that you have failed");
didPass = false;

// results for the section: 
    // Congratulations. You Passed!
    // We are sorry to inform you that you have failed

