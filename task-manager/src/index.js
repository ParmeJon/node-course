const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
  dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
})



// parses incoming json so we have it accessible as an object
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}.` )
})

// Middleware examples
// app.use((req, res, next) => {
  //   if (req.method === 'GET') {
    //     res.send('GET requests are disabled.')
    //   } else {
      //     next()
      //   }
      // })

      // app.use((req, res, next) => {
        //   res.status(503).send('Maintenance: Currently all routes are disabled.')
        // })
//
// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handler
//



// const Task = require('./models/task')
// const User = require('./models/user')
//
// const main = async () => {
//   // const task = await Task.findById("5d2b9200f13d26082860a85b")
//   // // Getting entire profile based on owner id relationship
//   // // Turns task.owner to be the entire obj
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)
//
//   // Finding Task based on User
//   const user = await User.findById('5d2b919218a50107fad32fbf')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }
//
// main()

// const jwt = require('jsonwebtoken')
//
// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'})
//   console.log(token)
//
//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }
//
// myFunction()

// encryption and decryption
//  andrew => poidbfjskbfkjsdf -> andrew

// hashing algorithms are one way
// mypass -> ffhaijkbfkabdhjfaba