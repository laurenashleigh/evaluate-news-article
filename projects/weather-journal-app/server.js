// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8080;

// Setup Server
const server = app.listen(port, () => {console.log('running on localhost: ', port)});

//GET route
app.get('/all', (request, response) => {
    response.send(projectData);
});

//POST route
app.post('/add', (request, response) => {
    let data = request.body;
    projectData = {
        weather: data.weather,
        temperature: data.temperature,
        date: data.date,
        userResponse: data.userResponse,
    }
    response.send(projectData);
})