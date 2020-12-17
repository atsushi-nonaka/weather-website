const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=476e4caf8f4698d1c750e29acbfd552e&query=${long},${lat}&units=f`

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to wether service!', undefined)
        }else if (body.error) {
            callback('Unable to find location!', undefined)
        }else {
            const { feelslike, temperature, humidity, weather_descriptions } = body.current
            callback(undefined, `${weather_descriptions[0]} It is currently ${humidity}% It is currently ${temperature} degrees out. It feels like ${feelslike} degress out.`)
        }
    })
}

module.exports = forecast