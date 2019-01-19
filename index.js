// Reverses a string
let reverse = content => Array.from(content).reverse().join("");

// Returns processed array (lower case) content for palindrome testing
let processedArgumentsArray = (array) => array.map(eachEntry => eachEntry.toLowerCase());

// Returns Object of each array element and its palindrome status, true if the phrase is a palindrome, false otherwise
let palindrome = (array) =>
      processedArgumentsArray(array).reduce((PalObject, entry) =>
      PalObject.set(entry, entry === reverse(entry)), new Map());

//Creates Array of individual words from single string or multiple strings array
let wordsArray = inputs => inputs.join(" ").match(/[\w']+/g);

// Defines a Phrase object (Intended for Single word phrase and Individual treatment of arguments)
function Phrase() {
  this.argumentsArray = [...arguments];
  this.palindromeObject = palindrome(this.argumentsArray);

// Makes the phrase LOUDER
  this.louder = () => this.argumentsArray.map(eachEntry => eachEntry.toUpperCase());
}

// Defines a TranslatedPhrase object (Multiple words phrase, SINGLE OR MULTIPLE ARGUMENTS, treated word by word)
function TranslatedPhrase() {
  this.argumentsArray = [...arguments]					// While redefined by Phrase below, both defines it same way, although we may even shrug because it's not used after Phrase redefines it below. Except by louder(), but we're covered
  this.wordsArray = wordsArray(this.argumentsArray);	// To demonstrate scope access
  Phrase.apply(this, this.argumentsArray);				// To demonstrate inheritance of properties (esp louder() )
  this.palindromeObject = palindrome(this.wordsArray);	// To redefine palindromeObject for TranslatedPhrase & Scope
}

TranslatedPhrase.prototype = Object.create(Phrase.prototype); // Setting TranslatedPhrase.prototype to Phrase.prototype
TranslatedPhrase.prototype.constructor = TranslatedPhrase;	  // By changing the prototype of TranslatedPhrase, we have lost our constructor-function TranslatedPhrase(), so we have to recover it.
