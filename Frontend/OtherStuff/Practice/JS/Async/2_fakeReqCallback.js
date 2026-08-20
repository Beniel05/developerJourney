// Base function.
function fakeReqCallback(url, success, failure) {
  const delay = Math.floor(Math.random() * 5000) + 1; // 1 to 5 seconds.
  setTimeout(() => {
    if (delay > 3000) {
      failure("Failed. Delay over 3 seconds.");
    } else {
      success(
        `Success. Response for ${url} took place within ${delay / 1000} seconds.`,
      );
    }
  }, delay);
}

// Basic Idea - Only one url's callback.

// fakeReqCallback(
//   "amazon.com",
//   (success) => { // Function_A
//     console.log("Worked!");
//     console.log(success);
//   },
//   (failure) => { // Function_B
//     console.log("Not worked.");
//     console.log(failure);
//   },
// );

// Now going to call multiple URL only when the parent URL is results in success.
// Used function keyword - for better readability
fakeReqCallback(
  "amazon.com/1",
  function (success) {
    console.log("Worked! - 1");
    console.log(success);
    fakeReqCallback(
      "amazon.com/2",
      function (success) {
        console.log("Worked! - 2");
        console.log(success);
        fakeReqCallback(
          "amazon.com/3",
          function (success) {
            console.log("Worked! - 3");
            console.log(success);
          },
          function (failure) {
            console.log("Not worked. - 3");
            console.log(failure);
          },
        );
      },
      function (failure) {
        console.log("Not worked. - 2");
        console.log(failure);
      },
    );
  },
  function (failure) {
    console.log("Not worked. - 1");
    console.log(failure);
  },
);
