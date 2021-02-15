const dotenv = require('dotenv');
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser');
var cors = require('cors');
dotenv.config();


const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key='
const apiKey = process.env.API_KEY
const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

console.log('mock API', mockAPIResponse)

app.get('/get', function (req, res) {
    res.send({ key: apiKey})
})
