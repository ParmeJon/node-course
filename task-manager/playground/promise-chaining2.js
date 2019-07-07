require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d1f73666dea547197b36db3').then((task) => {
  console.log(task)
  return Task.countDocuments({ completed: false })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})
