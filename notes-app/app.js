const getNotes = require('./notes.js')
const chalk = require(`chalk`)

const msg = getNotes()
console.log(msg)

console.log(chalk.green("Success!"))

console.log(chalk.bold.yellow.inverse.underline("Error!"))




// module exports is what is the return value of require.
// const add = require(`./Extra/utils2.js`)
//
// const sum = add(4, -2)
// console.log(sum)
// const validator = require(`validator`)

// using the validator library that was imported from npm
// console.log(validator.isURL('https://jonathansychan.com'))
