// Base function
function fakeRequest(url) {
    return new Promise((resolve, reject) => {
        // 1. Generate a delay between 0 and 1000 milliseconds
        const delayInMs = Math.random() * 1000; 
        
        setTimeout(() => {
            // 2. Reject if the network request took longer than 600ms
            if(delayInMs < 600) {
                resolve(`Here is your data from ${url} in ${delayInMs.toFixed(2)} ms`);
            } else {
                reject(`Time Exceeded. ${delayInMs.toFixed(2)}`);
            }
        }, delayInMs); // 3. The timeout now waits for the actual scaled milliseconds
    })
}

fakeRequest('uber/1')
.then((res) => { 
    console.log(`Resolved. ${res}`);
})
.catch((err) => {
    console.log(`Rejected. ${err}`);
})

// ========================================================================================

// Random Background Color function;
function delayedColorChange(newColor, delay) {
    return new Promise((resolve) => { // There will be no rejection here so skipped - reject.
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    })
}

delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('indigo', 1000))
.then(() => delayedColorChange('violet', 1000))



// Without Promise - the same delayedColorChange;

// function delayedColorChange(newColor, delay, doNext) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext(); // if there is a next callback - then execute() otherwise skip. like if statement.
//     }, delay);
// }

// delayedColorChange('red',1000,() => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000); // No callback in the last one.
//                     })
//                 })
//             })
//         })
//     })
// })




// Basic Promise workflow.
/*
const ifResolved = new Promise((resolve, reject) => {
    resolve("Success Data!");
});

// Use .then() to get the resolved value
ifResolved.then((data) => {
    console.log("Extracted:", data); // Logs: Extracted: Success Data!
});

const ifRejected = new Promise((resolve, reject) => {
    reject("Error Reason!");
});

// Use .catch() to get the rejected value and stop the red error
ifRejected.catch((error) => {
    console.log("Handled Error:", error); // Logs: Handled Error: Error Reason!
});
*/