// module exports is what is the return value of require.
// const add = require(`./Extra/utils2.js`)
//
// const sum = add(4, -2)
// console.log(sum)

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)
