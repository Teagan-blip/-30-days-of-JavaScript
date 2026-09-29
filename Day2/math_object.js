const PI = Math.PI

console.log(PI);  //3.141592653589793


// Math.round - rounds value to nearest whole number
console.log(Math.round(PI));  // 3
console.log(Math.round(3.82));  // 4


// Math.floor - rounds everything DOWN (to whole number)
console.log(Math.floor(PI));   // 3
console.log(Math.floor(3.82));   // 3

// Math.ceil rounds up
console.log(Math.ceil(3.14));  // 4




// Math.min returns the minimum value
console.log(Math.min(3, -5, 22, 5, -1, 13)); //-5

// Math.max returns the maximum value
console.log(Math.max(3, -5, 22, 5, -1, 13));  // 22


// Math.random - creatres random number between 0 - 0.999999
console.log(Math.random());

console.log(Math.round(Math.random())); //Gives either 1 or 0 depending on if the random number between 0-0.999999 is closer to 0 or 1

console.log(Math.round(10*(Math.random())));  //Gives a random number between 0-10  (flawed version)


const ranNum = Math.round(10*(Math.random()));

console.log(ranNum);  //Gives a random number between 1 and 10

const ranNumONe = Math.round(10*(Math.random()));
const ranNumTwo = Math.round(10*(Math.random()));

console.log(`Random sum: ${ranNumONe} + ${ranNumTwo} = ${ranNumONe+ranNumTwo}`);


//TECHNICALLY my random number generator (0-10) gives a less likley change of getting a 10 or a 0 because nothing is getting rounded down to 10 (since caps at 0.99)and nothing is getting rounded up to 0 (since starts at 0)
// Better method is *11 and then do Math.floor

console.log(`Accurate random number generator: ${Math.floor(11*(Math.random()))}`);


// Absolute value  Math.abs- negatives become positive version of the number
console.log(Math.abs(-10));  //10
console.log(Math.abs(10));  //10
console.log(Math.abs(-2348));  //2348


// Square root  Math.sqrt - finds the square root
console.log(Math.sqrt(9));  // 3


//Power  Math.power  - Power of
console.log(Math.pow(3, 2));  //9
console.log(Math.pow(3, 3));  //27
console.log(Math.pow(5, 2));  //25


// Logarithm  Math.log(x)  - Retunrs the natural logarithm with base E of x
console.log(Math.log(2));  // 0.6931471805599453
console.log(Math.log(10));  // 2.302585092994046

//Another version og log
console.log(Math.LN2);  // 0.6931471805599453
console.log(Math.LN10);  // 2.302585092994046

//Trigonometry
console.log(Math.sin(0));
console.log(Math.sin(60));

Math.cos(0);
Math.cos(60);
