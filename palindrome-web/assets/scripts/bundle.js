(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

module.exports = PalindromeTest;

// Reverses a string
let reverse = content => Array.from(content).reverse().join("");

// Returns Map Object of each unique processed array element and its palindrome status, true if the word/phrase is a palindrome, false otherwise
let palindrome = array => array.reduce((PalObject, entry) =>
    PalObject.set(entry, entry === reverse(entry)), new Map());

// Returns Map Object of unique individual words (duplicates regardless of case and single alphabets are removed) in the raw form received from single string or multiple strings array
let wordsOnly = rawWords => rawWords.join(" ").match(/[\w']+/g).filter((v, i, array) =>
  !!v.match(/[a-z]/gi) && v.match(/[a-z]/gi).length > 1 && array.indexOf(v) === i).reduce((UniqueWordsMap, value) =>
  UniqueWordsMap.set(value.toLowerCase(), value), new Map());

// Returns Map Object of unique strings (duplicate phrases regardless of case, punctuation, or space as well as single words are removed) in the raw from received
let phrasesOnly = rawPhrases => rawPhrases.filter((v, i, array) =>
  !!v.match(/[a-z]/gi) && v.match(/[\w']+/g).length > 1 && array.indexOf(v) === i).reduce((UniquePhrasesMap, value) =>
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

},{}],2:[function(require,module,exports){
let PalindromeTest = require("snoseeds-palindrome");
// let PalindromeTest = require("../../../index.js");

// let string = prompt("Please enter a string for palindrome testing:");
// let phrase = new PalindromeTest(string);
//
// if (Array.from(phrase.phrasesPalindromeObject.values())[0] === true) {
//   alert(`"${phrase.argumentsArray[0]}" is a palindrome!, when processed as "${Array.from(phrase.phrasesPalindromeObject.keys())[0]}"`);
// } else {
//   alert(`"${phrase.argumentsArray[0]}" is not a palindrome.`)
// }


let  makeOL = (palindromeArray, processedPalindromeArray) => {
  // Create the list element:
  let list = document.createElement('ol');

  palindromeArray.map((palindromeItem, index) => {
    let item = document.createElement('li');
    // Set its contents:
    item.appendChild(document.createTextNode(`"${palindromeItem}" is a palindrome when processed as "${processedPalindromeArray[index]}"`));

    // Add it to the list:
    list.appendChild(item);

  })
  return list;
}


let palindromeTester = event => {
  event.preventDefault();
  let inputs = new PalindromeTest(` ${event.target.phrases.value} `.split(/\n+/));
  let resultSummary = document.querySelector("#resultSummary");
  let failedTest = document.querySelector("#failedTest");
  let passedPhrases = document.querySelector("#passedPhrases");
  let passedWords = document.querySelector("#passedWords");
  resultSummary.innerHTML = "";
  failedTest.innerHTML = "";
  passedPhrases.innerHTML = "";
  passedWords.innerHTML = "";

  if (inputs.palindromesOnlyObject.size > 0) {


    resultSummary.innerHTML = (resultSum = (strings, total, plural, noOfPhrases, plural2, noOfWords) => {
      let str0 = strings[0], str1 = strings[1], str2 = strings[2], str3 = strings[3], str4 = strings[4], str5 = strings[5];
      let nillPhrases =` and zero palindrome phrases`, nillWords =`zero palindrome words`;

      return noOfPhrases > 0 && noOfWords > 0 ? `${str0}${total}${str1}${plural}${str2}${noOfPhrases}${str3}${noOfPhrases > 1 ? "s" : ""}${str4}${noOfWords}${str5}${noOfWords > 1 ? "s" : ""}.` :
      noOfPhrases > 0 && noOfWords === 0  ? `${str0}${total}${str1}${noOfPhrases > 1 ? "s" : ""}${str2}${noOfPhrases}${str3}${noOfPhrases > 1 ? "s" : ""}${str4}${nillWords}.`     :
      /* noOfPhrases === 0 && noOfWords > 0 */ `${str0}${total}${str1}${noOfWords > 1 ? "s" : ""}${str2}${noOfWords}${str5}${noOfWords > 1 ? "s" : ""}${nillPhrases}.`;

    })`Whao! We have a total of ${inputs.palindromesOnlyObject.size} unique palindrome${"s"} in the tested input, with a breakdown of ${inputs.passedPhrasesPalindrome.length} palindrome phrase${"s"} and ${inputs.passedWordsPalindrome.length} palindrome word`;

    if (inputs.passedPhrasesPalindrome.length > 0)  {
      passedPhrases.innerHTML = `The following line${inputs.passedPhrasesPalindrome.length > 1 ? "s" : ""} show${inputs.passedPhrasesPalindrome.length > 1 ? "" : "s"} the palindrome phrase${inputs.passedPhrasesPalindrome.length > 1 ? "s" : ""} / sentence${inputs.passedPhrasesPalindrome.length > 1 ? "s" : ""} in the above input, along with the corresponding breakdown for each.`;
      passedPhrases.appendChild(makeOL(inputs.passedPhrasesPalindrome, inputs.formOfPassedPhrasesPalindrome))
    }

    if (inputs.passedWordsPalindrome.length > 0)  {
      passedWords.innerHTML = `The following line${inputs.passedWordsPalindrome.length > 1 ? "s" : ""} show${inputs.passedWordsPalindrome.length > 1 ? "" : "s"} the palindrome phrase${inputs.passedWordsPalindrome.length > 1 ? "s" : ""} / sentence${inputs.passedWordsPalindrome.length > 1 ? "s" : ""} in the above input, along with the corresponding breakdown for each.`;
      passedWords.appendChild(makeOL(inputs.passedWordsPalindrome, inputs.formOfPassedWordsPalindrome))
    }

  } else {
    failedTest.innerHTML = `There is no palindrome in this input.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});

},{"snoseeds-palindrome":1}]},{},[2]);
