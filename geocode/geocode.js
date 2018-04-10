const request=require('request');

var geocodeAddress=(address,callback)=>{

var encodedAddress=encodeURIComponent(address);

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
},(error,response,body)=>{
    if(error){
        callback('Unable to connect to Google Servers');
       
    }else if(body.status==='ZERO_RESULTS'){
        callback(`Unable to a location for ${address} address`);
    }else if(body.status==='OVER_QUERY_LIMIT'){
        callback('OVER QUERY LIMIT ERROR.')
    }else if(body.status==='OK'){
        callback(undefined,{
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            latitude:body.results[0].geometry.location.lng
        })
        console.log(body.results[0].geometry.location);
    }
});
}

module.exports={
    geocodeAddress
}