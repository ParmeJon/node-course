require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d1f73666dea547197b36db3').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })

  return count
}

deleteTaskAndCount('5d226de5e6150698765e604d').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
