// const dotenv = require('dotenv');
// dotenv.config();
// const apiKey = process.env.API_KEY
const  handleSubmit = (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    let apiKey;
    fetch('http://localhost:8081/get')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        apiKey = data.key;
        
        console.log('Data 1',data)
        fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&url=${formText}`)
        .then((res) => res.json())
        .then((data) => {
            console.log('DATA api', data);
            document.getElementById('confidence').innerHTML = `Confidence score: ${data.confidence}`;
            document.getElementById('positivity').innerHTML = `Positivity: ${data.score_tag}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
        })
    })
}

export { handleSubmit }
