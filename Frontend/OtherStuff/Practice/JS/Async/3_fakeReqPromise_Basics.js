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

fakeReqPromise("Blinkit/1")
  .then((res) => {
    console.log("RESOLVED. 1");
    console.log(res);
    fakeReqPromise("Blinkit/2")
      .then((res) => {
        console.log("RESOLVED. 2");
        console.log(res);
        fakeReqPromise("Blinkit/3")
          .then((res) => {
            console.log("RESOLVED. 3");
            console.log(res);
          })
          .catch((err) => {
            console.log("REJECTED. 3");
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("REJECTED. 2");
        console.log(err);
      });
  })
  .catch((err) => {
    console.log("REJECTED. 1");
    console.log(err);
  });
