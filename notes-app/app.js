const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require(`chalk`)

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Description',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title to remove.',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    notes.listNotes()
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read your notes',
  builder: {
    title: {
      describe: "Name of the title you want to read.",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})


yargs.parse()
// console.log(yargs.argv)

// if (command === 'add') {
//   console.log('Adding note!')
// } else if (command === 'remove') {
//   console.log('Removing note!')
// }



// const msg = getNotes()
// console.log(msg)
//
// console.log(chalk.bold.blue.inverse.underline("Success!"))
//
// console.log(process.argv[2])

// module exports is what is the return value of require.
// const add = require(`./Extra/utils2.js`)
//
// const sum = add(4, -2)
// console.log(sum)
// const validator = require(`validator`)

// using the validator library that was imported from npm
// console.log(validator.isURL('https://jonathansychan.com'))
