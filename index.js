"use strict"

module.exports = PalindromeTest;

// Reverses a string
let reverse = content => Array.from(content).reverse().join("");

// Returns processed array (lower case) content for palindrome testing
let processedArgumentsArray = array => array.map(eachEntry => eachEntry.toLowerCase());

// Returns Object of each array element and its palindrome status, true if the phrase is a palindrome, false otherwise
let palindrome = array =>
    processedArgumentsArray(array).reduce((PalObject, entry) =>
    PalObject.set(entry, entry === reverse(entry)), new Map());

// Returns Array of individual words from single string or multiple strings array
let wordsArray = inputs => inputs.join(" ").match(/[\w']+/g);

// Processes individual Phrases (strings) of each received array to loose all spaces & punctuations
let phrasesArray = strings => strings.map(eachPhrase => eachPhrase.match(/[a-z]/gi).join(""));

// Takes a map having mixed boolean values and Returns a map of properties whose values are true
let palindromesOnly = mixedMap => Array.from(mixedMap, ([key, value]) => {
  if (value === true) return key}).filter(key => key).reduce((PassedPalObject, key) =>
  PassedPalObject.set(key, true), new Map())


// Creates object that processess inputs, and shows inputs and their palindrome status
function PalindromeTest() {
  this.argumentsArray = Array.from(arguments);

  // Defines a phrasesPalindromeObject (For Individual PalindromeTest treatment of string, Single or Multiple Arguments)
  this.phrasesPalindromeObject = palindrome(phrasesArray(this.argumentsArray));

  // Defines a wordsPalindromeObject (For Word by word PalindromeTest treament of string, Single or Multiple Arguments)
  this.wordsPalindromeObject = palindrome(wordsArray(this.argumentsArray));

  // Defines a palindromesOnlyObject (Shows only phrases and words that have been tested to be palindromes)
  this.palindromesOnlyObject = palindromesOnly(new Map([...this.phrasesPalindromeObject, ...this.wordsPalindromeObject]));
}
