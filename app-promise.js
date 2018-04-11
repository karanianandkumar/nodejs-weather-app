
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather For',
            string: true //to make sure get data from cmd
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoCodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS' || response.data.status == 'OVER_QUERY_LIMIT') {
        throw new Error('Unable to find Address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/a278d2bf0c59733012984354fb993782/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemp}`);
})
    .catch((error) => {
        if (error.code === 'ENOTFOUND') {
            console.log("Unable to connect API server");
        } else {
            console.log(error.message);
        }

    })