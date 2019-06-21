// load the fs module and store it into the fs variabl
const fs = require('fs')

// call writeFileSync on fs to write text on the notes.txt file
// fs.writeFileSync('notes.txt', "My name is Jon and I'm learning node.js!")

// appending a msh to the text file instead of overwriting.
fs.appendFileSync('notes.txt', " I love to learn!")
