# PalindromeTest object (with palindrome detector)

This is a sample NPM module created as a more elaborate form of an exercise from [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial). The module can be used as follows:

Arguments passed to PalindromeTest can be single string or multiple strings.
- wordsPalindromeObject is a Map Object property of PalindromeTest that would give the same result irrespective of multiple string arguments or single string argument, because it's computed to show the Palindrome status of inputs on a word by word basis.
- Whereas, phrasesPalindromeObject is a Map Object property of PlaindromeTest that's computed to return the palindrome status of inputs on an argument by argument basis (phrases by phrase or sentences by sentences, while leaving words to be tested by wordsPalindromeObject), this would be clear from the results below.
- It should also be noted that the palindrome status of a word or individual argument phrase appearing several times (irrespective of case and punctuation, and even irrespective of spaces between a string in the case of phrasesPalindromeObject) would only have its palindrome status showed once, and that's the last time that the word or phrase occurs.
- palindromesOnlyObject is a Map Object property of PalindromeTest that's computed to only return all the Phrases and Words that have been tested to be palindromes.
- Finally, other properties have been added, to allow for a more robust processing and intuitive presentation of the Palindrome Detector Result, an example of which is shown by a live palindrome tester that's hosted at [*Palindrome Tester*](https://snoseeds.github.io/snoseeds-palindrome/palindrome-web/palindrome.html), and its corresponding repository is at my [*GitHub repo*]().

$ npm install --global snoseeds-palindrome<br/>
$ vim test.js<br/>
let PalindromeTest = require("snoseeds-palindrome");<br/>
let napoleonsLament = new PalindromeTest("Able was I, ere I saw Elba", "reconocer reconocer", "Mallam, contiguous palindrome words give palindrome phrase");<br/>
console.log(napoleonsLament.phrasesPalindromeObject);<br/>
console.log(napoleonsLament.wordsPalindromeObject);<br/>
console.log(napoleonsLament.palindromesOnlyObject);<br/>
$ node test.js<br/>
Map {<br/>
  'ablewasiereisawelba' => true,<br/>
  'reconocerreconocer' => true,<br/>
  'contiguouspalindromewordsgivepalindromephrase' => false }<br/>
Map {<br/>
  'able' => false,<br/>
  'was' => false,<br/>
  'i' => true,<br/>
  'ere' => true,<br/>
  'saw' => false,<br/>
  'elba' => false,<br/>
  'reconocer' => true,<br/>
  'mallam' => true,<br/>
  'contiguous' => false,<br/>
  'palindrome' => false,<br/>
  'words' => false,<br/>
  'give' => false,<br/>
  'phrase' => false }<br/>
Map {<br/>
  'ablewasiereisawelba' => true,<br/>
  'reconocerreconocer' => true,<br/>
  'i' => true,<br/>
  'ere' => true,<br/>
  'reconocer' => true,<br/>
  'mallam' => true }
