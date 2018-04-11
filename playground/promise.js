var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    })
}

asyncAdd(10, 2).then((sum) => {
    console.log(sum);
    return asyncAdd(sum, 33)
}).then((sum) => {
    console.log(sum);
}).catch((error) => {
    console.log(error);
})


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey It works.');
//         reject('Oops.. Failed..')
//     }, 2500);

// });

// somePromise.then((message) => {
//     console.log('Success', message);
// }, (error) => {
//     console.log('error', error);
// })