/*
====================================
 JAVASCRIPT BASICS - STUDENT NOTES
====================================
*/

// =================================
// 1. VARIABLES & ASSIGNMENT
// =================================

let score = 10 + 11;
console.log("Score =", score);

let num1 = 10;

// num1 = num1 / 5
num1 /= 5;

console.log("After division num1 =", num1);

// =================================
// 2. let vs const
// =================================

let gameName = "Elden Ring";
gameName = "The Finals";

console.log("Game Name:", gameName);

const username = "noobmaster";

// ❌ This will cause error
// username = "promaster";

console.log("Username:", username);

// =================================
// 3. DATA TYPES IN JS
// =================================

/*
Primitive Types:

String
Number
Boolean
Bigint
Undefined
Null
Symbol

Non-Primitive:

Object
*/

let isLoggedIn = false;
let website = "google.com";
let marks = 102;

console.log(typeof isLoggedIn);
console.log(typeof website);
console.log(typeof marks);

// =================================
// 4. ARRAYS & OBJECTS
// =================================

// Array
let gameTypes = ["arcade", "rpg", "co-op"];

// Object
let user = {
  firstname: "Peter",
  lastname: "Heth",
};

console.log("Games:", gameTypes);
console.log("User:", user.firstname);

// =================================
// 5. VARIABLE COPY
// =================================

let originalScore = 102;
let copiedScore = originalScore;

console.log("Original:", originalScore);
console.log("Copied:", copiedScore);

// =================================
// 6. LOGICAL OPERATORS
// =================================

// && -> AND
// || -> OR
// ! -> NOT

let isPaid = true;
let isSubscribed = true;

console.log("Access granted?", isPaid && isSubscribed);

// Real-life login example

let isEmailUser = true;
let isGoogleUser = false;

console.log("User can login:", isEmailUser || isGoogleUser);

// =================================
// 7. ARITHMETIC OPERATIONS
// =================================

let addition = 4 + 5;
let subtraction = 9 - 3;
let multiplication = 3 * 5;
let division = 8 / 2;
let remainder = 9 % 2;
let power = 2 ** 3;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);
console.log("Power:", power);

// =================================
// 8. INCREMENT / DECREMENT
// =================================

let myScore = 110;
myScore++;

let credits = 56;
credits--;

console.log("Score after increment:", myScore);
console.log("Credits after decrement:", credits);

// =================================
// 9. COMPLEX MATH EXPRESSION
// =================================

let complexScore = 2 * (3 + 2) - 1;
console.log("Complex Score =", complexScore);

// =================================
// 10. COMPARISON OPERATORS
// =================================

let numA = 3;
let numB = 3;
let numC = 6;

console.log("3 == 3 →", numA == numB);
console.log("3 != 6 →", numA != numC);
console.log("3 > 6 →", numA > numC);
console.log("3 < 6 →", numA < numC);

// =================================
// 11. CONSOLE METHODS
// =================================

console.log("Hello world");
console.log("abcXyz");

// Node.js specific output
// process.stdout.write("hello world\n");

console.table({ city: "Pune" });
console.warn("This is a warning");

/*
====================================
 END OF JS BASICS FILE
====================================
*/
