(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
let PalindromeTest = require("snoseeds-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new PalindromeTest(string);

if (Array.from(phrase.phrasesPalindromeObject.values())[0] === true) {
  alert(`"${phrase.argumentsArray[0]}" is a palindrome!, when processed as "${Array.from(phrase.phrasesPalindromeObject.keys())[0]}"`);
} else {
  alert(`"${phrase.argumentsArray[0]}" is not a palindrome.`)
}

// let punctuatedPhrasePalindrome = new PalindromeTest("Madam, I'm Adam.");
//
// alert(Array.from(punctuatedPhrasePalindrome.phrasesPalindromeObject.keys())[0] + " > " +  String(Array.from(punctuatedPhrasePalindrome.phrasesPalindromeObject.values())[0]));

},{"snoseeds-palindrome":1}]},{},[2]);
