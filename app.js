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
request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=IAAA%20technologies',
    json:true
},(error,response,body)=>{
    console.log(body.results[0].geometry.location);
});