let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(myWord => myWord.length > 5);
console.log(interestingWords);


// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every(word => word.length > 5));
