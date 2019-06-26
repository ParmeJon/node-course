const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Parmejon'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Parmejon'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: "TRASH!"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: "lots of rain",
    location: "nyc"
  })
})



app.listen(3000, () => {
  console.log('Server is up on port 3000')
})

// app.get('/help', (req, res) => {
  //   res.send([{
    //       name: 'John',
    //       age: 25
    //   },{
      //     name: 'Sarah',
      //     age: 21
      //   }])
      // })
      //
      // app.get('/about', (req, res) => {
        //   res.send('<h1>About</h1>')
        // })
