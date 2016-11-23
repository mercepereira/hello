// app/index.js
const calc = require('./calc')

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