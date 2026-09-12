const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(`Incoming request for: ${req.url}`);
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end("Thankyou for visiting...")
});

server.listen(8000, () => {
    console.log("Server is listening to PORT 8000");
})
