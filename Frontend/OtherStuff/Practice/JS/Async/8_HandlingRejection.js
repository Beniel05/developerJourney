function fakeRequest(url) {
  return new Promise((resolve, reject) => {
    const random = Math.random() * 5000;
    setTimeout(() => {
      const value = (random / 1000).toFixed(2);
      if (random > 3000) {
        reject(`${url} Request Timeout. ${value} seconds`);
      } else {
        resolve(`Here is the data from ${url} in ${value} seconds`);
      }
    }, random);
  });
}

async function makeRequest() {
  /*
    NOTE:
    With this single try/catch, if the first awaited request rejects,
    execution immediately jumps to catch.

    Therefore, the second request will NOT be called.
    */
   console.log('=== Single Try/Catch ===');
  try {
    const res1 = await fakeRequest("amazon/1");
    console.log("RESOLVED 1: " + res1);

    const res2 = await fakeRequest("amazon/2");
    console.log("RESOLVED 2: " + res2);
  } catch (err) {
    console.log("ERROR: " + err);
  }

  /* 
    To allow each request to continue even if another request fails,
    handle each request with its own try/catch.
    */
  console.log("=== Multiple Try/Catch ===");
  try {
    const res1 = await fakeRequest("flipkart/1");
    console.log(res1);
  } catch (reject) {
    console.log(reject);
  }

  try{
    const res2 = await fakeRequest("flipkart/2");
    console.log(res2);
  } catch (reject) {
    console.log(reject);
  }

  try{
    const res2 = await fakeRequest("flipkart/3");
    console.log(res2);
  } catch (reject) {
    console.log(reject);
  }
}

makeRequest();
