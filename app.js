const request=require('request');
const yargs=require('yargs');


const argv=yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather For',
            string:true //to make sure get data from cmd
        }
    })
    .help()
    .alias('help','h')
    .argv;

var encodedAddress=encodeURIComponent(argv);

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
},(error,response,body)=>{
    if(error){
        console.log('Unable to connect to Google Servers');
    }else if(body.status==='ZERO_RESULTS'){
        console.log(`Unable to a location for ${argv} address`);
    }else if(body.status==='OVER_QUERY_LIMIT'){
        console.log('OVER QUERY LIMIT ERROR.')
    }else if(body.status==='OK'){
        console.log(body.results[0].geometry.location);
    }
});