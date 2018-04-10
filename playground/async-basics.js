console.log('Starting app');

setTimeout(()=>{
    console.log('Inside of Callback');

},1000);

setTimeout(()=>{
    console.log("Second Timeout");
},0);

console.log('Finishing Up');