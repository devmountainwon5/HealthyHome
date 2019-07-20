const express = require('express');
const path = require('path');

const setUp = require('./Server/Middleware/setup');
const dbSetup = require('./Server/Middleware/database');
const endpointSetup = require('./Server/controller');
require('dotenv').config();

const app = express();

//Setup middleware
setUp(app);

//setup DB
dbSetup(app);

/// Serves static files (Frontend). Must be above all of the routes.
app.use(express.static(path.join(__dirname, '/build')));

endpointSetup(app);

/// Catch all for routing. Must be below all other routes. 
app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
    })
});

const port = process.env.port || 4011;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});