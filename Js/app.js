// Call All Elements

let divResults = document.getElementById('result');

let mainInput = document.getElementById('main-input');

let btnClearInput = document.getElementById('clear-input');

let start = document.getElementById('start');


// Chick & Set From Locale Storge
window.localStorage.getItem('Words') ? '' : window.localStorage.setItem('Words', JSON.stringify({}));

let allWords = JSON.parse(window.localStorage.getItem('Words'));


// Text Hellp for User
showHellpText(divResults, 'قـول يـا  عـبده');

// Main Setting 
mainInput.focus();


function showHellpText (el, txt) {
    let hellpText = document.createTextNode(txt);
    let h1 = document.createElement('h1');
    h1.appendChild(hellpText);
    el.appendChild(h1);
};


// Satrt App 
start.addEventListener('click', function () {
    // Remove All Content From Div Results
    divResults.innerHTML = ''
    // Prossesing Data
    prossesingAndPrintData();
});


function prossesingAndPrintData () {
    let words = mainInput.value.split(" ");
    let word = '';
    let letter = '';
    // Add Words From Locale Storeg
    words[0] === '' ? '' : addToLocaleStorge(words);
    for (let i = 0; i < words.length; i++) {
        // Sitting Wrods
        word = words[i];
        // Create Elments 
        let mainDiv = document.createElement('div');
        let fullWord = document.createElement('div');
        let txtWord = document.createTextNode(word);
        // Add Class Name From Elmentes
        mainDiv.classList.add('word');
        fullWord.classList.add('org');
        // Append Elements In Main Div Results
        fullWord.appendChild(txtWord);
        mainDiv.appendChild(fullWord);
        divResults.appendChild(mainDiv);
        // Cick If Words == ""
        chickBackValue(fullWord);
            for (let j = 0; j < word.length; j++) {
                letter = word[j];
                // Create Span For Letters
                let span = document.createElement('span');
                let spanTxt = document.createTextNode(` ${letter}`);
                span.appendChild(spanTxt);
                mainDiv.appendChild(span);
            };
    };
};

btnClearInput.addEventListener('click', function () {
    mainInput.value = '';
    divResults.innerHTML = '';
});

// Handell Sitting App

function chickBackValue (w) {
    if (w.innerHTML === "") {
        w.parentElement.remove();
    }
};

function addToLocaleStorge (word) {
    let date = new Date().getTime();
    // Add Word From Object 
    allWords[date] = word;
    // Add To Locale Storge
    window.localStorage.setItem('Words', JSON.stringify(allWords));
};