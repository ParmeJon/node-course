const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(`mongodb://127.0.0.1:27017/task-manager-api`, {
  useNewUrlParser: true,
  useCreateIndex: true
})

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid.')
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number.')
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 7,
//     trime: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error('Password must not include password')
//       }
//     }
//   }
// })
//
// const me = new User({
//   name: '  Andrew  ',
//   email: '  jon@chan.io  ',
//   password: 'hello12'
// })
//
// // this returns a promise
// me.save().then((me) => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })

// converts lowercase and pluralizes model name in mongoDB
const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const cry = new Task({
  description: '   Excreting salt water from eyes.    '
})

cry.save().then((cry) => {
  console.log(cry)
}).catch((error) => {
  console.log('Error!', error)
})
