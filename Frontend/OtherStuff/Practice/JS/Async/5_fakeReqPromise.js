// The 3_fakeReqPromise_Basics - it just a basic version which replaces callbacks with Promise.
// But that doesn't show the real code shortening. 

// Base Function
const fakeReqPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5000) + 1;
    setTimeout(() => {
      if (delay > 3000) {
        // If more than 3 sec = reject.
        reject(
          `Rejected. Connection took more time. Delay took > 3 seconds. (${delay / 1000})`,
        );
      } else {
        resolve(
          `Success, Here's the data from ${url}. Took ${delay / 1000} seconds.`,
        );
      }
    }, delay);
  });
};

// This below version is the actual implementation of Promise.
fakeReqPromise('zomato/1')
.then((response) => {
    console.log(response);
    return fakeReqPromise('zomato/2');
})
.then((response) => {
    console.log(response);
    return fakeReqPromise('zomato/3');
})
.then((response) => {
    console.log(response);
})
.catch((err) => {console.log(err);});