let x = 24;
let y = 32;
let z = x + y;
console.log(z);

let a = 1.9999999999999999999999999999999999999;
console.log(a);

let b = 4 / 2;
console.log(b);

// This is how to make a comment. 

/* This is a multi-line comment.
    because it is a multi-line comment, it will not be executed.
*/

let c = 9 % 2;
console.log(c);

let d = 9 % 3;
console.log(d);

/* You can check to see if a number is even or odd using the % operator.  
Divide by 2 and if the remainder is 0, then it is even.  
If the remainder is 1, then it is odd. */

let year = 2022;
console.log(year);

let numChickens = 5;
let roosters = 1;

numChickens + roosters;
console.log(numChickens + roosters);

let totalChickens = numChickens + roosters;
console.log(totalChickens);


// This is how to decrament a number.
let numLives = 9;
numLives++;

console.log(numLives);

numLives--;

console.log(numLives);

let myAge = 22;
console.log(myAge == 23);

let isActiveGame = true;
console.log(isActiveGame);

isActiveGame = 1;
console.log(isActiveGame);

isActiveGame = true;
console.log(isActiveGame);

/* Need to Learn Typescript */


// This is strings example with indexing.
let username = 'John';
console.log(username);

let animal = 'octopus';
console.log(animal[2]);

firstName = 'John';
lastName = 'Smith';
let fullName  = firstName + " " + lastName;
console.log(fullName);


//String methods

console.log(fullName.length);
console.log(fullName.indexOf('S'));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(0));
console.log(fullName.substring(0, 2));
console.log(fullName.slice(2, 4));


//String trimming
let sentence = "       This is a sentence.";
console.log(sentence.trim());

//Chaining Methods
let sentence2 = "      This is a sentence.";
console.log(sentence2.trim().toUpperCase());

let tvShow = "The Office";
console.log(tvShow.indexOf('Office'));
console.log(tvShow.indexOf('The'));
console.log(tvShow.indexOf('d'));  //Shows -1 becuase its not found.

//slice method  
let newAnswer = "This is the newest answer on the block and it is law";
console.log(newAnswer.slice(5, 10)); //beggining and end arugements.
console.log(newAnswer.slice(40)); // only the beginning argument.

//replace method
let newAnswer2 = "haha that is so funny";
console.log(newAnswer2.replace('funny', 'lolololol'));

const word = "skateboard"; 
let answer = word.slice(5,10);
console.log(answer);
let facialHair = answer.replace('o', 'e');
console.log(facialHair);

//template literals.
//Have to use backticks.

let newestString = `This is a template literal ${4 + 3}.`;
console.log(newestString);

//Math Object

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.sqrt(64));
console.log(Math.abs(-4));
console.log(Math.pow(8, 2));

Math.random();
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// To specify a random number between 0 and whatever number  you use the Math.random()
// method and then multiply it by the number you want to use. 

let randomNumber = Math.random() * 10; //This will give you a random number between 0 and 9.
let randomNumber2 = Math.random() * 100; //This will give you a random number between 0 and 99.
let randomNumber3 = Math.random() * 1000; //This will give you a random number between 0 and 999.

console.log(randomNumber);


Math.floor(Math.random() * 10) + 1; //This will give you a random number between 0 and 10
Math.floor(Math.random() * 100) + 1; //This will give you a random number between 0 and 100
Math.floor(Math.random() * 1000) + 1; //This will give you a random number between 0 and 1000


// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let roll = `${die1}, ${die2} and their sum is ${die1 + die2}`;
console.log(roll);

1 > 1;
1 < 1;
1 >= 1;
1 <= 1;
1 == 1;
1 != 1;
2 === 2;
2 !== 2;

let age = 18;
age > 18;
age >= 18;

