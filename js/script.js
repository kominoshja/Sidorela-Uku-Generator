// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [{
        quote: 'You are the shuckiest shuck faced shuck in the world!',
        source: 'James Dashner',
        citation: 'The Maze Runner',
        year: '2009'
    },
    {
        quote: 'What\'s my age again?',
        source: 'Blink 182',
        citation: '',
        year: ''
    },
    {
        quote: 'Act first, explain later',
        source: 'Dan Brown',
        citation: 'Digital Fortress',
        year: ''
    },
    {
        quote: '“Some quotations," said Zellaby, "are greatly improved by lack of context.”',
        source: 'John Wyndham',
        citation: 'The Midwich Cuckoos',
        year: ''
    },
    {
        quote: 'Luck is not as random as you think. Before that lottery ticket won the jackpot, someone had to buy it.',
        source: 'Vera Nazarian',
        citation: 'The Perpetual Calendar of Inspiration',
        year: ''
    },
    {
        quote: 'Expired condoms are like nuclear waste: there\'s nothing sensible you can do with it.',
        source: 'Andrew Smith',
        citation: '',
        year: ''
    }
];

// Create the getRandomQuuote function and name it getRandomQuote
const getRandomQuote = function (array) {
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

// Create the printQuote funtion and name it printQuote
const printQuote = function () {
    let generatedRandomQuote = getRandomQuote(quotes);
    let renderedQuote = '';
    for (const key in generatedRandomQuote) {
        let value = generatedRandomQuote[key];
        console.log('This is the current key value: ' + value);
        console.log('This is the current key: ' + key);
        if (key === 'quote') {
            renderedQuote += '<p class="'+ key + '">' + value + '</p>';
        } else if (key === 'source') {
            renderedQuote += '<p class="'+ key + '">' + value;
        } else if (key === 'citation' && value.length > 0) {
            renderedQuote += '<span class="'+ key + '">' + value + '</span>';
        } else if (key === 'year' && value.length > 0) {
            renderedQuote += '<span class="'+ key + '">' + value + '</span>';
        }
    }
    renderedQuote += '</p>'

    document.getElementById('quote-box').innerHTML = renderedQuote;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);