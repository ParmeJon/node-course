const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
require('dotenv').config()

const address = process.argv[2]

if (!address) {
  console.log('Please provide an address')
} else {
  geocode(address, (error, {latitude: dataLat, longitude: dataLong, location}) => {
    if (error) {
      return console.log(error)
    }

    forecast(dataLat, dataLong, (error, { answer }) => {
      if (error) {
        return console.log(error)
      }

      console.log(location)
      console.log(answer)
    })
  })
}
