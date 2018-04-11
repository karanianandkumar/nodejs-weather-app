var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey It works.');
        reject('Oops.. Failed..')
    }, 2500);

});

somePromise.then((message) => {
    console.log('Success', message);
}, (error) => {
    console.log('error', error);
})