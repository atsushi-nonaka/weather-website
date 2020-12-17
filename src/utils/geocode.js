const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1Ijoibm9uYWthYXRzdXNoaSIsImEiOiJja2lpODNod2MwNmxtMnJuMG9vZWFmYzFpIn0.O0U-45m2StSJ0hl0XXZGEw`

    request({ url, json: true }, (error, { body } = {}) => {
        console.log(body)
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another again', undefined)
        } else {
            const { center, place_name: location } = body.features[0]
            callback(undefined, {
                latitude: center[0],
                long: center[1],
                location
            })
        }
    })
}

module.exports = geocode