"use strict"

module.exports = PalindromeTest;

// Reverses a string
let reverse = content => Array.from(content).reverse().join("");

// Returns Map Object of each unique processed array element and its palindrome status, true if the word/phrase is a palindrome, false otherwise
let palindrome = array => array.reduce((PalObject, entry) =>
    PalObject.set(entry, entry === reverse(entry)), new Map());

// Returns Map Object of unique individual words (duplicates regardless of case and single alphabets are removed) in the raw form received from single string or multiple strings array
let wordsOnly = rawWords => rawWords.join(" ").match(/[\w']+/g).filter((v, i, array) =>
  v.match(/[a-z]/gi).length > 1 && array.indexOf(v) === i).reduce((UniqueWordsMap, value) =>
  UniqueWordsMap.set(value.toLowerCase(), value), new Map());

// Returns Map Object of unique strings (duplicate phrases regardless of case, punctuation, or space as well as single words are removed) in the raw from received
let phrasesOnly = rawPhrases => rawPhrases.filter((v, i, array) =>
  v.match(/[\w']+/g).length > 1 && array.indexOf(v) === i).reduce((UniquePhrasesMap, value) =>
  UniquePhrasesMap.set(value.toLowerCase().match(/[a-z]/gi).join(""), value), new Map());

// Takes a map having mixed boolean values and Returns a map of properties whose values are true
let palindromesOnly = mixedMap => Array.from(mixedMap, ([key, value]) =>
  value === true ? key : undefined).reduce((PassedPalObject, key) =>
  !!key ? PassedPalObject.set(key, true) : PassedPalObject, new Map());

// Takes a map having mixed boolean values and Returns Array of numerical indexes of properties whose values are true
let passedPalindromeIndexes = mixedMapOfPhrasesOrWords =>
  Array.from(mixedMapOfPhrasesOrWords, ([key, value]) =>
  value === true ? key : false).reduce((PassedIndexes, key, index) => PassedIndexes.concat(key === false ? [] : index), []);

// Creates object that processess inputs, and shows inputs and their palindrome status
function PalindromeTest() {
  if (Array.isArray(arguments[0])) {
    this.argumentsArray = arguments[0];
  } else {
    this.argumentsArray = Array.from(arguments);
  }

  this.UniquePhrasesObject = phrasesOnly(this.argumentsArray);

  this.phrasesArray = Array.from(this.UniquePhrasesObject.values());

  this.UniqueWordsObject = wordsOnly(this.argumentsArray);

  this.wordsArray = Array.from(this.UniqueWordsObject.values());  

  // Defines a phrasesPalindromeObject (For Individual PalindromeTest treatment of string, Single or Multiple Arguments)
  this.phrasesPalindromeObject = palindrome(Array.from(this.UniquePhrasesObject.keys()));

  // Defines a wordsPalindromeObject (For Word by word PalindromeTest treament of string, Single or Multiple Arguments)
  this.wordsPalindromeObject = palindrome(Array.from(this.UniqueWordsObject.keys()));

  // Defines a palindromesOnlyObject (Shows only phrases and words that have been tested to be palindromes)
  this.palindromesOnlyObject = palindromesOnly(new Map([...this.phrasesPalindromeObject, ...this.wordsPalindromeObject]));

  // Returns array of all phrases or single string inputs that are Palindromes
  // TODO: Add tests for this functionality
  this.passedPhrasesPalindrome =
    passedPalindromeIndexes(this.phrasesPalindromeObject).map(passedIndex => this.phrasesArray[passedIndex]);

  // Returns array of all words that are Palindromes
  // TODO: Add tests for this functionality
  this.passedWordsPalindrome =
    passedPalindromeIndexes(this.wordsPalindromeObject).map(passedIndex =>
    this.wordsArray[passedIndex]);

  // Defines array of the processed form of input strings/phrases, from which they passed as palindromes
  this.formOfPassedPhrasesPalindrome =
  passedPalindromeIndexes(this.phrasesPalindromeObject).map(passedIndex => Array.from(this.UniquePhrasesObject.keys())[passedIndex]);
  // passedPalindromeIndexes(this.phrasesPalindromeObject).map(passedIndex => Array.from(this.phrasesPalindromeObject.keys())[passedIndex]);

  // Defines array of the processed form of input words, from which they passed as palindromes
  this.formOfPassedWordsPalindrome =
  passedPalindromeIndexes(this.wordsPalindromeObject).map(passedIndex => Array.from(this.UniqueWordsObject.keys())[passedIndex]);
  // passedPalindromeIndexes(this.wordsPalindromeObject).map(passedIndex => Array.from(this.wordsPalindromeObject.keys())[passedIndex]);
}
