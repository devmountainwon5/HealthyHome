require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const cors = require('cors'); 
const path = require('path');
const session = require("express-session");
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser'); 

const app = require('express')();
const setUp = require('./server/middleware/setup');
const dbSetup = require('./server/middleware/Database')
const endpointSetup = require('./server/controller')
require('dotenv').config();
//Setup middleware
setUp(app)
//setup DB
dbSetup(app)

endpointSetup(app)

const app = express(); 
let {PORT} = process.env; 

app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json()); 

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true,
    cookie: {maxAge: 1200000}
  })
); 

massive(process.env.DATABASE_URL)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('the db is connected')
    })
    .catch(err => console.log('err in the db'));


 /// Serves static files (Frontend). Must be above all of the routes.
app.use(express.static(path.join(__dirname, '/build')));





/// Catch all for routing. Must be below all other routes. 
app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
      })
});

  const port = process.env.port || 4011;
  app.listen(PORT, () => {
      console.log(`Purring on Port ${PORT}`); 
  }); 