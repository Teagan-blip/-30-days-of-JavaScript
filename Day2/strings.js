
let space = ' '           // an empty space string
let firstName = 'Anna';
let lastName = 'Smith';

let fullName = firstName + space + lastName; // concatenation, merging two string together. (declared a space as a variable)
console.log(fullName);

//Long literal strings
//  Use the \ at the nend of lines to indicate the string will continue on next line

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// escape sequences
//  \n: new line
//  \t: Tab, means 8 spaces
//  \\: Back slash
//  \': Single quote (')
//  \": Double quote (")

// template literals
// N.B. `` (backticks - top left of keyboard)  and ${}
console.log(`Hello ${firstName}, my name is ${lastName}.  I am you father`);


let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`);  // 2 is greater than 3: false


// Convert to upper case
console.log(firstName.toUpperCase());  // ANNA
console.log(firstName.toLowerCase());  // anna

// reassigned firstname. So didn't need let again
firstName = "Teagan";
lastName = "Murray";


console.log(`Signed: ${firstName[0]}.${lastName[0]}`);

// .substring lets you do more than one
// two arguments: the startign index and the stopping index
console.log(firstName.substring(0, 3));  // Tea
console.log(firstName.substring(3, 7));  //gan

// .substr lets you slice a section
// takes two arguemtns: the startign index and the number of character to slice
console.log(firstName.substr(0, 3));  //Tea
console.log(firstName.substr(3, 3));  //gan


// trim()  Removes trailing space in the beginning or the end of a string.
let string = '   30 Days Of JavaScript   '

console.log(string)  //    30 Days Of JavaScript
console.log(string.trim(' '))  //30 Days Of JavaScript

//  includes(): checks if substring argument exists in the string.
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true

//replace  - replaces old substring with a new substring
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python



//