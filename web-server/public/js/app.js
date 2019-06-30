console.log('Client side js file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((res) => {
//   res.json()
//   .then((data) => {
//     console.log(data)
//   })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.getElementById('message-2')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const location = search.value
  weatherForm.reset()
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`http://localhost:3000/weather?address=${location}`)
  .then((res) => {
    res.json()
    .then ((data) => {
      if (data.err) {
        messageOne.textContent = data.err
      } else {
        messageOne.textContent= data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})
