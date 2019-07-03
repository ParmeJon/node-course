// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require(`mongodb`)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne({ _id: new ObjectID("5d1ada9e998871482ffece1e") }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

// READING
// return value is a cursor.
  db.collection('users').find({ age: 27 }).toArray((error, users) => {
    console.log(users)
  })

  db.collection('users').find({ age: 27 }).count((error, count) => {
    console.log(count)
  })

  db.collection('tasks').findOne({ _id: new ObjectID("5d1ad7929cff5d47a1faf3c4")}, (error, task) => {
    if (error) {
      return console.log('Unable to find task')
    }

    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    if (error) {
      return console.log(error)
    }
    console.log(tasks)
  })

// CREATING
  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'Ben',
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }
  //
  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   },
  //   {
  //     name: 'Bob',
  //     age: 27
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents!')
  //   }
  //
  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Get a job',
  //     completed: false
  //   },
  //   {
  //     description: 'Make a project',
  //     completed: false
  //   },
  //   {
  //     description: 'Cry',
  //     completed: true
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents!')
  //   }
  //   console.log(result.ops)
  // })
})
