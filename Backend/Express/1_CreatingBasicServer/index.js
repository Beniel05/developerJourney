const express = require("express");

const app = express();
// console.dir(app);

app.use((req, res) => {
    /* app.use() is an Express method used to mount middleware functions that run for 
    every incoming request matching a specified URL path prefix, regardless of the HTTP method. */
    console.log(`Server got visited. Path: ${req.path}`);
    res.send(`<h3>We got request from Path: ${req.path}</h3>`)
})

// app.get('/', (req, res) => {
//     res.send("Welcome to the server.")
// })

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening in PORT ${PORT}`);
})