// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// variable that will contain watched quotes that will be used to not reapeat same quotes.
var watchedQuotes = [];


// creates an array of object that contains quotes with source, citation, year and category.
var quotes = [
  {
    quote: 'People are illogical, unreasonable, and self-centered. Love them anyway.',
    source: 'KENT M. KEITH',
    citation: 'Maui: Inner Ocean Publishing',
    year: 2001,
    category:'Philosophy'
  },
  {
    quote: 'Have the courage to follow your heart and intuition. They somehow know what you truly want to become.',
    source: 'Steve Jobs.',
    category:'Life success'
    
  },
  {
    quote: 'The difference between genius and stupidity is that genius has limits.',
    source: 'Albert Einstein.',
    category:'Philosophy'
  },
 {
    quote: 'Be the change you want to see in the World.',
    source: 'Mahatma Gandhi.',
    category:'Life success'
  },
   {
    quote: 'Whatever you are, be a good one.',
    source: 'Abraham Lincon.',
    category:'Philosophy'
  },
   {
    quote: "In the practice of tolerance, one's enemy is the best teacher.",
    source: 'The Dalai Lama',
    category:'Philosophy'
  },
   {
    quote: 'To improve is to change; to be perfect is to change often.',
    source: 'Wiston Churchill.',
    category:'Life success'
  },
   {
    quote: 'Efforts and courage are not enought without purpose and direction.',
    source: 'JFK',
    category:'Life Success'
  },
   {
    quote: 'All our dreams can come true, if we have the courage to pursue them.',
    source: 'Walter Elias Disney.',
    category:'Life success'
  },  
];
  

//create a function called getRandomQuote that will generate a random quote from the quotes object created earlier
// it will return the random selected quote.
function getRandomQuote () {
    var quoteObject = Math.floor(Math.random() * quotes.length);
    var slicedQuote = quotes.splice(quoteObject, 1) [0];
    watchedQuotes.push(slicedQuote);
    if (quotes.length === 0) {
      quotes = watchedQuotes;
      watchedQuotes = [];
    }
    return slicedQuote;
  }
  
  // function that will change color at random every time new quote will be shown
  function setBackgroundColor() {
    var colorArray = ['#FF0000', '#FFFF00', '#000000', '#FA8072', '#FF1493', '#FF4500', '#FFD700', '#8B008B', '#90EE90'];
    var selectedColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.getElementById('background-color').style.background = selectedColor;
  }
  
  
  
  
  
  
// printQuote will call the getRandomQuote function and will store the random quote into a variable
// printQuote will create a string that will show all the component that the quotes object contained.
// printQuote will show the final quote into the page using the HTML string
  function printQuote () {
    var selectedQuote = getRandomQuote();
    var html = '<p class="quote">' + selectedQuote.quote + '</p>' + '<p class="source">' + selectedQuote.source 
    + '<span class="citation">' + selectedQuote.citation + '</span>'
    + '<span class="year">' + selectedQuote.year + '</span>'
    + '<span class="category">' + selectedQuote.category + '</span>' + '</p>';
    document.getElementById('quote-box').innerHTML = html;
    setBackgroundColor();  
}

// quotes will change automatically after time

function changeQuote() {
  window.setInterval(printQuote, 9000);
}

// call functions

getRandomQuote();
printQuote();
setBackgroundColor();
changeQuote();


  

  

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  