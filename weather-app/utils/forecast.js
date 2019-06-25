const request = require('request')

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/${process.env.DB_DARKSKYTOKEN}/${lat},${long}`

  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        answer: `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} out. There is a ${response.body.currently.precipProbability}% chance of rain.`
      })
    }
  })
}

module.exports = forecast
