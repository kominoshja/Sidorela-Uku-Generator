// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [{
        quote: 'Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you',
        source: 'Princess Diana',
        citation: '',
        year: '1992',
        tags: ['Expectation', 'Kindness', 'Knowledge', 'Reward'],
        background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
    },
    {
        quote: 'Together we can change the world, just one random act of kindness at a time',
        source: 'Ron Hall',
        citation: 'Same Kind of Different as Me',
        year: '2008',
        tags: ['Change', 'Kindness', 'Time', 'Together', 'World'],
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
    },
    {
        quote: 'I believe life is an intelligent thing, that things aren\'t random',
        source: 'Steve Jobs',
        citation: 'Time Magazine',
        year: '1997',
        tags: ['Belief', 'Life', 'Intelligent'],
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
    },
    {
        quote: 'Goals transform a random walk into a chase',
        source: 'Mihaly Csikszentmihalyi',
        citation: 'Wired Magazine',
        year: '1996',
        tags: ['Web', 'Goals', 'Experience'],
        background: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)'
    },
    {
        quote: 'Luck is not as random as you think. Before that lottery ticket won the jackpot, someone had to buy it.',
        source: 'Vera Nazarian',
        citation: 'The Perpetual Calendar of Inspiration',
        year: '',
        tags: ['Luck', 'Lottery', 'Jackpot'],
        background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
    },
    {
        quote: 'I take random inspiration from everywhere',
        source: 'Edward Enninful',
        citation: 'W Magazine',
        year: '2016',
        tags: ['Fashion', 'Inspiration', 'Designer'],
        background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
    },
    {
        quote: 'Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence',
        source: 'Franz Kafka',
        citation: 'The necessity of form',
        year: '1988',
        tags: ['Philosophy', 'Science', 'Control'],
        background: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'
    }
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


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "startInterval" function is called
document.getElementById('loadQuote').addEventListener("click", startInterval, false);