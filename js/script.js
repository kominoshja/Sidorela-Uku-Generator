// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [{
        quote: 'Sa me pelqen OpenSUSE',
        source: 'Sidorela Uku',
        citation: '',
        year: '30/10/2019',
        tags: ['OpenSUSE', 'blessed', 'love'],
        background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
    },
    {
        quote: 'Uaa sa instalova Node..... sa qef',
        source: 'Sidorela Uku',
        citation: '',
        year: '30/10/2019',
        tags: ['Node', 'Woman in tech', 'fun'],
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    },
    {
        quote: 'Varrosa zogun dhe i cova mandarine mbi varr',
        source: 'Sidorela Uku',
        citation: '',
        year: '05/12/2019',
        tags: ['Sad', 'Zog', 'Madarine Life'],
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
    },
    {
        quote: 'Ooo sa shume text....jo qenka pak',
        source: 'Sidorela Uku',
        citation: '',
        year: '30/10/2019',
        tags: ['text', 'werk'],
        background: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)'
    },
    {
        quote: 'Jam konfuze',
        source: 'Sidorela Uku',
        citation: '',
        year: '30/10/2019',
        tags: ['Confusion', 'what'],
        background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
    },
    {
        quote: 'Sapo me pershendeti nje futbollist nga Partizani',
        source: 'Sidorela Uku',
        citation: '',
        year: '01/11/2019',
        tags: ['Partizani', 'Inspiration', 'Recognition'],
        background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
    },
    {
        quote: 'E di e di qe jam shume e mire',
        source: 'Sidorela Uku',
        citation: '',
        year: '01/11/2019',
        tags: ['Self Esteem', 'Confidence'],
        background: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'
    },
    {
        quote: 'Greket dallohen nga fizionomia',
        source: 'Sidorela Uku',
        citation: '',
        year: '01/11/2019',
        tags: ['Nationalism??', 'I need more data'],
        background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
    },
    {
        quote: 'Sa e zgjuar qe jam',
        source: 'Sidorela Uku',
        citation: '',
        year: '01/11/2019',
        tags: ['Big brain', 'Smart', 'Lum ai qe do me mari'],
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    },
    {
        quote: 'Sa me pelqen ky CryptPad',
        source: 'Sidorela Uku',
        citation: '',
        year: '01/11/2019',
        tags: ['Hacktivist', 'Open Source life'],
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
    },
    {
        quote: 'Where do you think you\'re going?............Eshte nje kenge',
        source: 'Sidorela Uku',
        citation: '',
        year: '01/11/2019',
        tags: ['I don\'t know why she is like this', 'Spotify sucks'],
        background: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)'
    },
    {
        quote: 'Kjo cokollata eshte si ekipi jone',
        source: 'Sidorela Uku',
        citation: '',
        year: '05/11/2019',
        tags: ['diabet', 'team building'],
        background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
    },
    {
        quote: 'Ne ne Baldushk kishim vetem shkolla kolektive',
        source: 'Sidorela Uku',
        citation: '',
        year: '05/11/2019',
        tags: ['Life of Baldushk', 'We don\'t want no education'],
        background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
    },
    {
        quote: 'Ej po e bukur kjo nderfaqja e ktyre',
        source: 'Sidorela Uku',
        citation: '',
        year: '05/11/2019',
        tags: ['UI developer', 'Material Designer'],
        background: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'
    },
    {
        quote: 'Uuuuuuuuuuuuuu sa nice qenka kjooo',
        source: 'Sidorela Uku',
        citation: '',
        year: '05/11/2019',
        tags: ['No clue what she\'s on about', 'noice'],
        background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
    },
    {
        quote: 'Ej Partizani eshte ne vend te par',
        source: 'Sidorela Uku',
        citation: '',
        year: '05/11/2019',
        tags: ['Partizani', 'sports nerd', 'statistics and BI'],
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    },
    {
        quote: 'Njerezit si perfundim nuk lexojne',
        source: 'Sidorela Uku',
        citation: '',
        year: '05/11/2019',
        tags: ['Sad', 'More books, less screens', 'analfabeter'],
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
    },
    {
        quote: 'Edhe gayt jane cute',
        source: 'Sidorela Uku',
        citation: '',
        year: '08/11/2019',
        tags: ['inclusive', 'lgbt+', 'cute'],
        background: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)'
    },
    {
        quote: '97 + 6 bejne 103 jo 105',
        source: 'Sidorela Uku',
        citation: '',
        year: '11/11/2019',
        tags: ['Mathematics', 'wizzard'],
        background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
    },
    {
        quote: 'Jam shume e zene.....po lexoj ne Reddit',
        source: 'Sidorela Uku',
        citation: '',
        year: '11/11/2019',
        tags: ['Redditor', 'busy life'],
        background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
    },
    {
        quote: 'Mua me pelqen te jem njerezore',
        source: 'Sidorela Uku',
        citation: '',
        year: '11/11/2019',
        tags: ['Lizzard people', 'humanity as a service'],
        background: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'
    },
    {
        quote: 'Bletet duhen futur ne kavanoz dhe te lehen aty derisa te bejne mjalt',
        source: 'Sidorela Uku',
        citation: '',
        year: '11/11/2019',
        tags: ['Save the bees', 'Honey from Baldushk'],
        background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
    },
    {
        quote: 'Boomer is a term of Z generation',
        source: 'Sidorela Uku',
        citation: '',
        year: '11/11/2019',
        tags: ['Okay Boomer'],
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    },
    {
        quote: 'Une jam njeri i mire ne pergjithesi',
        source: 'Sidorela Uku',
        citation: '',
        year: '02/12/2019',
        tags: ['Self reflection', 'Goodness comes from within'],
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
    },
    {
        quote: 'Nje hap i parendesishem per njerezimin, por nje hap i rendesishem per mua',
        source: 'Sidorela Uku',
        citation: '',
        year: '07/01/2020',
        tags: ['Moon landing was staged', 'Progress'],
        background: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)'
    },
    {
        quote: 'Ka dhe Sidorela te tjera ne Baldushk',
        source: 'Sidorela Uku',
        citation: '',
        year: '04/12/2019',
        tags: ['Por vetem nje ka dedicated generator'],
        background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
    },
    {
        quote: 'Sot kishte ditelindjen Vace Zela',
        source: 'Sidorela Uku',
        citation: '',
        year: '07/04/2009',
        tags: ['Vace moj Vace', 'Femija i pare'],
        background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
    },
    {
        quote: 'Ka nje connection midis meje dhe JavaScript, sepse kemi lindur ne te njejtin vit',
        source: 'Sidorela Uku',
        citation: '',
        year: '06/12/2019',
        tags: ['The universe is alive', 'Childs of God'],
        background: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'
    },
    {
        quote: 'Skisha ca beja nje dite keshtuqe perditsova wikipedian e festivalit te kenges',
        source: 'Sidorela Uku',
        citation: '',
        year: '07/01/2019',
        tags: ['Wiki editors united', 'The future depends on us'],
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    },
    {
        quote: 'Uuu ca ngjyre, me pelqen',
        source: 'Sidorela Uku',
        citation: '',
        year: '06/12/2019',
        tags: ['Nature is beautiful', 'Love every color'],
        background: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'
    },
    {
        quote: 'Moos ca harrova sot..... Une harroj perdite',
        source: 'Sidorela Uku',
        citation: '',
        year: '30/10/2019',
        tags: ['Forgot but didn\'t forgive', 'I forgot what this hashtag was supposed to be'],
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    },
];

// Create the getRandomQuuote function and name it getRandomQuote
const getRandomQuote = function (array) {
    // We randomize the object that will be returned and store it in a variable
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

// Create the printQuote funtion and name it printQuote
const printQuote = function () {
    /**
     * To keep the code cleaner, we create a couple of variables to
     *  hold the values that we need in the function
     */

    // We call the previous function getRandomQuote and pass the
    // array as a parameter. The returned object is stored in the
    // variable to be used inside the printQuote function
    let generatedRandomQuote = getRandomQuote(quotes);
    // We create a variable to store our redered quote as a string
    let renderedQuote = '';
    // We iterate through all the keys and their values respectively
    for (const key in generatedRandomQuote) {
        // We create a variable to store the current value in the key
        // that is being looped. The value is reseted with every loop
        let value = generatedRandomQuote[key];
        // We can double check which key/value is being looped in
        // the console with the following functions
        console.log('This is the current key value: ' + value);
        console.log('This is the current key: ' + key);
        // We start our conditionals to populate our quote
        if (key === 'quote') {
            renderedQuote += '<p class="' + key + '">' + value + '</p>';
        } else if (key === 'source') {
            renderedQuote += '<p class="' + key + '">' + value;
        // Since citation and year are optional values we check if
        // the values aren't empty before concatenating the string
        // to the renderedQuote variable
        } else if (key === 'citation' && value.length > 0) {
            renderedQuote += '<span class="' + key + '">' + value + '</span>';
        } else if (key === 'year' && value.length > 0) {
            renderedQuote += '<span class="' + key + '">' + value + '</span>';
        } else if (key === 'tags') {
            // We close the paragraph tag opened while the key quote
            // was being evaluated and open another one for the tags
            renderedQuote += '</p><p>'
            // Since the value of the tags property is an array we
            // loop through all elements inside it with forEach
            value.forEach(function (element) {
                renderedQuote += '<span class="' + key + '">' + '#' + element + ' ' + '</span>';
            });
        // The last key is the background, every time the user
        // requests a new quote, the background changes too
        } else if (key === 'background') {
            document.body.style.backgroundImage = value;
        }
    }
    // After the loop ends we close the last paragraph
    renderedQuote += '</p>'
    // We finish our function by placing in the our concatenated
    // string to our #quote-box in the DOM
    document.getElementById('quote-box').innerHTML = renderedQuote;
}

// We define a variable to hold our timer
let interval;

// This function will call the printQuote function and reset the timer
const startInterval = function () {
    printQuote();
    clearInterval(interval);
    interval = setInterval(printQuote, 2000000);
}

// On page load we call the function with the timer, and the countdown begins
startInterval();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "startInterval" function is called
document.getElementById('loadQuote').addEventListener("click", startInterval, false);