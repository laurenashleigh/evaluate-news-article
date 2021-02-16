// const dotenv = require('dotenv');
// dotenv.config();
// const apiKey = process.env.API_KEY
const  handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const positivity = (scoreTag) => {
        let output;
    switch (scoreTag){
        case "P+":
            output = "Very positive";
            break;
        case "P":
            output = "Positive";
            break;
        case "NEU":
            output = "Neutral";
            break; 
        case "N":
            output = "Negative";
            break; 
        case "N+":
            output = "Very negative";
            break;
        case "NONE":
            output = "No sentiment";
    }
    return output;
    }

    console.log("::: Form Submitted :::")
    document.getElementById('loading').style.display = 'block';
    let apiKey;
    if(Client.urlChecker(formText)) {
        fetch('http://localhost:8081/get')
        .then(response => {
            return response.json()
        })
        .then(function(data) {
            apiKey = data.key;
            fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&url=${formText}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('DATA api', data);
                document.getElementById('confidence').innerHTML = `Confidence score: ${data.confidence}`;
                document.getElementById('positivity').innerHTML = `Positivity: ${positivity(data.score_tag)}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
                document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
                document.getElementById('loading').style.display = 'none';
            })
        })
    }
    
}

export { handleSubmit }
