
require('dotenv').config();
const port = process.env.PORT || 3001;
const path = require('path');
const bparse = require('body-parser');
const express = require('express');
const app = express();

// Middleware
app.use(bparse.urlencoded({ extended: true }));
app.use(bparse.text());
app.use(bparse.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'views/build')));

// Default route to serve React index
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/build/index.html'));
});
*/

// Content routes
require('./controllers/placeholder.js')(app);

// Starting the server
app.listen(port, () => console.log(`Listening on port ${port}.`));
