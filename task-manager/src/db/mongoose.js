const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/task-manager-api`, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

// const me = new User({
//   name: 'Andrew',
//   age: 27
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
    type: String
  },
  completed: {
    type: Boolean
  }
})

const cry = new Task({
  description: 'Excreting salt water from eyes.',
  completed: false
})

cry.save().then((cry) => {
  console.log(cry)
}).catch((error) => {
  console.log('Error!', error)
})
