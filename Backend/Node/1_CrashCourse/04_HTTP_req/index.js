const https = require("https");
https.get("https://v2.jokeapi.dev/joke/Programming?safe-mode", (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const joke = JSON.parse(data);
    // console.log(`Type: ${joke.type}`);
    if (joke.type === "single") {
      console.log(joke.joke);
    } else {
      console.log(joke.setup);
      console.log(joke.delivery);
    }
  });
});
