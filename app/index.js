// app/index.js
const calc = require('./calc')
const readline = require('readline');

const numbersToAdd = [
    3,
    4,
    10,
    2
]

const result = calc.sum(numbersToAdd)
//console.log('the result is ' + result)
// Template literals are string literals allowing embedded expressions. 
// hey were called "template strings" in prior editions
// Template literals are enclosed by the back-tick (` `)
console.log(`the result is ${result}`)

//write a small application that asks the user for two numbers to enter 
// from the standard input and print the result after it. 
// (hint: use the readline module: https://nodejs.org/api/readline.html)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give me 2 numbers ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});







