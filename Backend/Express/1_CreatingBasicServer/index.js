const express = require("express");

const app = express();
// console.dir(app);

/* Standard HTTP specification, a server can only send one HTTP response for one HTTP request */
// app.use((req, res) => {
//     /* app.use() is an Express method used to mount middleware functions that run for 
//     every incoming request matching a specified URL path prefix, regardless of the HTTP method. */
//     console.log(`Server got visited. Path: ${req.path}`);
//     res.send(`<h3>We got request from Path: ${req.path}</h3>`)
// })

app.get('/', (req, res) => {
    console.log(`${req.path} visited.`);
    res.send("HOME Page!")
})

app.get('/cats', (req, res) => {
    console.log(`${req.url} visited.`);
    res.send("Meow!")
})

app.get('/dogs', (req, res) => {
    console.log(`${req.url} visited.`);
    res.send("Bark!")
})

app.post('/dogs', (req, res) => {
    console.log(req.url);
    res.send("POST Request from /dogs !!")
})

app.get('/r/:subreddit', (req, res) => {
    // This :subreddit is Path Variable - it's like a placeholde - whatever the path /something after /r/ is taken as 'subreddit'.
    const { subreddit } = req.params;
    res.send(`<h1>Visited subreddit: ${subreddit}</h1>`)
})

app.get('/r/:subreddit/:id', (req, res) => {
    const { id, subreddit } = req.params;
    res.send(`ID: ${id} visited '${subreddit}' subreddit`)
})

// http://localhost:8080/search?q=Testing
app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send(`Nothing found, if nothing searched.`)
    }
    res.send(`Here is the search result for: ${q}`);
})

// http://localhost:8080/search2?q=Testing&color=red
app.get('/search2', (req, res) => {
    const { q, color } = req.query;
    if(!q || !color) {
        res.send(`Need two queries to provide output in /search2.`)
    }
    res.send(`Here is the search result for: ${q} & ${color}`);
})

// This '*path' should be at the last.
// This will take care of all other possible GET /paths which are not written by us in the top.
// If this placed at very beginning all the GET /paths - even written ones - will be ignored by this.
app.get("*path", (req, res) => {
    res.send("I don't know what you're trying to access.")
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening in PORT ${PORT}`);
})