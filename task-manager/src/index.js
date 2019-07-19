const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is up on port ${port}.` )
})

// TESTING/LEARNING
// const multer = require('multer')
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a Word document'))
//     }
//
//     cb(undefined, true)
//     // cb(new Error('File must be a PDF'))
//     // cb(undefined, true)
//     // cb(undefined, false)
//   }
// })
//
// // const errorMiddleware = (req, res, next) => {
// //   throw new Error('From my middleware')
// // }
//
// // Call back function to handle error with that specific call signature
// // lets express know about uncaught errors.
// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// }, (error, req, res, next) => {
//   res.status(400).send({error: error.message})
// })
//



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
