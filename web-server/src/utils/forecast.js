const request = require('request')

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/${process.env.DB_DARKSKYTOKEN}/${lat},${long}`

  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        answer: `${body.daily.data[0].summary} It is currently ${body.currently.temperature} out. There is a ${body.currently.precipProbability}% chance of rain.`,
        highLow: `Temperature high is ${body.daily.data[0].temperatureHigh} while the low is ${body.daily.data[0].temperatureLow}`
      })
    }
  })
}

module.exports = forecast
