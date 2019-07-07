const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/task-manager-api`, {
  useNewUrlParser: true,
  useCreateIndex: true
})

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

// const cry = new Task({
//   description: '   Excreting salt water from eyes.    '
// })
//
// cry.save().then((cry) => {
//   console.log(cry)
// }).catch((error) => {
//   console.log('Error!', error)
// })
