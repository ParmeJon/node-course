const fs = require('fs')
// const book = {
//   title: 'Charlie and the Chocolate Factory',
//   author: 'Ronald Dahl'
// }
//
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Jonathan"
data.age = 25

const newData = JSON.stringify(data)

fs.writeFileSync('1-json.json', newData)
