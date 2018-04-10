const request = require('request');

var getWeather = (lat, lng, callback) => {
    //console.log(lat, lng);
    request({
        url: `https://api.darksky.net/forecast/a278d2bf0c59733012984354fb993782/${lat},${lng}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, { temperature: body.currently.temperature });
        } else {
            callback("Unable to fetch Weather");
        }

    });
}

module.exports = {
    getWeather
}