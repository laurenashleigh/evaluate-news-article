function urlChecker(inputText) {
    console.log("::: Running urlChecker :::", inputText);
    let regex = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    console.log(regex)
    if(regex === null) {
        alert("Please enter valid URL (starting with http://)");
        return false
    } else {
        return true;
    }
}

export { urlChecker }
