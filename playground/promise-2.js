const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {


        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google Servers');

            } else if (body.status === 'ZERO_RESULTS') {
                reject(`Unable to a location for ${address} address`);
            } else if (body.status === 'OVER_QUERY_LIMIT') {
                reject('OVER QUERY LIMIT ERROR.')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
                //console.log(body.results[0].geometry.location);
            }

        });
    });
}


geocodeAddress('IAAA Technologies').then((location) => {
    console.log(location, undefined, 2);
}, (error) => {
    console.log(error);
})
