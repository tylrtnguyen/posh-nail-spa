// Libraries import
const express = require('express');
const bodyParser = require('body-parser');
const expressHandleBars = require('express-handlebars');
// Deal with file path
const path = require('path');
// Set favicon
const favicon = require('express-favicon');

const app = express();

const port = process.env.PORT || 8080;

DIST_DIR = __dirname,
HTML_FILE = path.join(DIST_DIR, 'index.html')

// Set static folder
app.use(express.static(DIST_DIR))


// Set favicon for application
app.use(favicon(__dirname + '/public/img/favicon.png'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () =>{
    console.log(__dirname);
    console.log(`Server started at: ${port}`);
});