'use strict'
const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());
require('dotenv').config();
const axios = require('axios');

const PORT = process.env.PORT || 3001;

// http://localhost:3001/
server.get('/', (req, res) => {
    res.send("Hello from the home route");
})

// http:localhost:3001/test/
server.get('/test', (req, res) => {
    res.send("Hello, You are now in test route");
})

// http:localhost:3001/weather/
let getWeatherData  = require("./Weather.js");
server.get('/weather', getWeatherData );


server.get('*', (req, res) => {
    res.send("404")
})

server.listen(PORT, () =>{
    console.log(`I'm listening on port ${PORT}`);
})
