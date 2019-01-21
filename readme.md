# PalindromeTest object (with palindrome detector)

This is a sample NPM module created as a more elaborate form of an exercise from [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial). The module can be used as follows:

Arguments passed to PalindromeTest can be single string or multiple strings.
- wordsPalindromeObject is a Map Object property of PalindromeTest that would give the same result irrespective of multiple string arguments or single string argument, because it's computed to show the Palindrome status of inputs on a word by word basis.
- Whereas, phrasesPalindromeObject is a Map Object property of PlaindromeTest that's computed to returns the palindrome status of inputs on an argument by argument basis (string by string, word by word, string by word etc), this would be clear from the results below.
- It should also be noted that the palindrome status of a word or individual argument phrase appearing several times would only have its palindrome status showed once, and that's the very first time that the word or phrase occurs.
- palindromesOnlyObject is a Map Object property of PalindromeTest that's computed to only return all the Phrases and Words that have been tested to be palindromes.

$ npm install --global snoseeds-palindrome
$ vim test.js
let PalindromeTest = require("snoseeds-palindrome");
let napoleonsLament = new PalindromeTest("Able was I, ere I saw Elba", "reconocer reconocer", "Mallam, contiguous palindrome words give palindrome phrase");
console.log(napoleonsLament.phrasesPalindromeObject);
console.log(napoleonsLament.wordsPalindromeObject);
console.log(napoleonsLament.palindromesOnlyObject);
$ node test.js
Map {
  'ablewasiereisawelba' => true,
  'reconocerreconocer' => true,
  'contiguouspalindromewordsgivepalindromephrase' => false }
Map {
  'able' => false,
  'was' => false,
  'i' => true,
  'ere' => true,
  'saw' => false,
  'elba' => false,
  'reconocer' => true,
  'mallam' => true,
  'contiguous' => false,
  'palindrome' => false,
  'words' => false,
  'give' => false,
  'phrase' => false }
Map {
  'ablewasiereisawelba' => true,
  'reconocerreconocer' => true,
  'i' => true,
  'ere' => true,
  'reconocer' => true,
  'mallam' => true }
