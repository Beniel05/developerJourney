const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // Express automatically looks inside the '/views' directory and 
    // appends the '.ejs' extension because of the 'view engine' setting.
    res.render("home");
})

app.listen(8080, () => {
    console.log("Server is running in Port 8080");
})