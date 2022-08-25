// console.log(1 + 3);

// let newInput = ("Hello World");
// console.log(newInput);

// let random = Math.random();
// if(random > 0.5) {
//     console.log("True")
//     console.log(random);
//     }

//  let age = prompt("How old are you?");

//     if (age < 6) {
//         console.log("You are Free")
//     } else if (age > 5 && age < 11) {
//         console.log("You are a child and it is $10 to enter")
//     } else if (age > 10 && age < 65) {
//         console.log("You are an adult and it cost $20 to enter")
//     } else {
//         console.log("You are a senior and it is $10 to enter")
//     }


const password = prompt("Please enter a new password");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Password meets criteria")
} else {
    console.log("Password is not long enough or contains a space")
}