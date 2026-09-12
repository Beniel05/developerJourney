const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log(`Incoming request from ${req.url} at ${Date.now()}`);
    console.log(req.headers);
    console.log(req.method);

    // Sending Response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Thankyou for visiting :)")
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`The server is listening on PORT ${PORT}`);
})