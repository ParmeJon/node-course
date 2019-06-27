const path = require('path')
const express = require('express')
const hbs = require('hbs')
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars enginer and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory serve
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
    message: "How may I help you?",
    title: 'Help',
    name: 'Parmejon'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: "lots of rain",
    location: "nyc"
  })
})

app.get('/help/*', (req, res)=> {
  res.render('404', {
    title: 'Help',
    errorMessage: 'Help article not found',
    name: 'Parmejon'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page not found.',
    name: 'Parmejon'
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
