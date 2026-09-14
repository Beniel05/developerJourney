const express = require("express");
const path = require("node:path");

const app = express();

app.set('view engine', 'ejs');

// Ensures Express finds the 'views' folder even if the app is run from a different terminal directory.
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    // Express automatically looks inside the '/views' directory and 
    // appends the '.ejs' extension because of the 'view engine' setting.
    res.render("home");
})

app.listen(8080, () => {
    console.log("Server is running in Port 8080");
})