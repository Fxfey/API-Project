var check = {}
element = document.getElementById("hintbox");

// RANDOM WORD API

const randWord = {
    url: 'https://random-words-api.herokuapp.com/',
    type: 'w?n=1'
};

const {url, type} = randWord;
const apiUrl = `${url}${type}`;

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (word) => generateHtml(word))

const generateHtml = (data) => {
    console.log(data)
    
    //Random image generation based off the random word API
    const randImg = {
        stockUrl: 'https://source.unsplash.com/1600x900/?',
        stockType: data
    }

    const {stockUrl, stockType} = randImg;
    const imgUrl = `${stockUrl}${stockType}`;

    document.getElementById("imgid").src=imgUrl;

    // Sets the guess in the Object to allow global scope
    check.guess = data

    const definition = {
        definUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
        definType: check.guess
    };
    
    const {definUrl, definType} = definition;
    const wordDef = `${definUrl}${definType}`;
    
    fetch(wordDef)
        .then( (definData) => definData.json())
        .then( (definText) => generateDefinHtml(definText))
    
    const generateDefinHtml = (definData) => {

        if(definData.title != undefined){
            // console.log("working test")
            textarea = `<div class="hint"><p>No definition available</p></div>`
        } else {
            textarea = `<div class="hint"><p>${definData[0].meanings[0].definitions[0].definition}</p></div>`
        }

        // console.log(definData.title)
        // console.log(definData[0].meanings[0].definitions[0].definition)

        const textDiv = document.querySelector('.hint')
        textDiv.innerHTML = textarea
    
    };

};

function newWord(){
      
    

    const randWord = {
        url: 'https://random-words-api.herokuapp.com/',
        type: 'w?n=1'
    };
    
    const {url, type} = randWord;
    const apiUrl = `${url}${type}`;
    
    fetch(apiUrl)
        .then( (data) => data.json())
        .then( (word) => generateHtml(word))
    
    const generateHtml = (data) => {
        console.log(data)
        const randImg = {
            stockUrl: 'https://source.unsplash.com/1600x900/?',
            stockType: data
        }
    
        check.guess = data


        const {stockUrl, stockType} = randImg;
        const imgUrl = `${stockUrl}${stockType}`;
    
        document.getElementById("imgid").src=imgUrl;



        const definition = {
            definUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
            definType: check.guess
        };
        
        const {definUrl, definType} = definition;
        const wordDef = `${definUrl}${definType}`;
        
        fetch(wordDef)
            .then( (definData) => definData.json())
            .then( (definText) => generateDefinHtml(definText))
        
        const generateDefinHtml = (definData) => {
            if(definData.title != undefined){
                textarea = `<div class="hint"><p>No definition available</p></div>`
            } else {
                textarea = `<div class="hint"><p>${definData[0].meanings[0].definitions[0].definition}</p></div>`
            };
        
            const textDiv = document.querySelector('.hint')
            textDiv.innerHTML = textarea
        
        };

    };

}

function backgroundCol(){
    document.body.style.background = 'bisque'
}

function guess(){

    let guess = document.getElementById('inputbox').value
    console.log(guess)
    if(check.guess == guess){
        console.log("Correct!")
        document.body.style.background = 'green'
        setTimeout(backgroundCol, 1000)
    } else {
        console.log("Incorrect!")
        document.body.style.background = 'maroon'
        setTimeout(backgroundCol, 1000)
    }

};









    