/* Global Variables */
const apiKey = '&appid=e417b88cc12c7202f273a0b0af0e5ed7&units=metric';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const localUrl = 'http://localhost:8080';



//Event listener
const callback = (e) => {
    e.preventDefault();
    console.log('button clicked');
    const newZipCode = document.getElementById('zip').value;
    const newUserResponse = document.getElementById('feelings').value;
    getZipCode(baseUrl, newZipCode, apiKey)
    .then((data) => {
        postData(`${localUrl}/add`, {temperature: data.temperature, date: newDate, userResponse: newUserResponse})
    })
    .then(() => {
        updateUI();
    })
}

document.getElementById('generate').addEventListener('click', callback)

//Async GET request API data
const getZipCode = async (baseUrl, zipCode, apiKey) => {
    const response = await fetch(baseUrl+zipCode+apiKey)
    try {
        const data = await response.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log('error'. error);
    }
}

//Async POST API data and user's data to app
const postData = async (url = '', data = {}) => {
    const request = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            temperature: data.temperature,
            date: data.date,
            userResponse: data.userResponse
        })
    })
    try {
        const newData = await request.json();
        return newData;
    } catch(error) {
        console.log('error', error)
    }
}

//Update the UI
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('content').innerHTML = allData.userResponse;
    } catch(error) {
        console.log('error', error)
    }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();