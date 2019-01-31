# PalindromeTest object (with palindrome detector)

This is a sample NPM module created as a more elaborate form of an exercise from [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial). The module can be used as follows:

Arguments passed to PalindromeTest can be single string or multiple strings.
- wordsPalindromeObject is a Map Object property of PalindromeTest that would give the same result irrespective of multiple string arguments or single string argument, because it's computed to show the Palindrome status of inputs on a word by word basis. It has also been computed not to return single alphabets as palindromes.
- Whereas, phrasesPalindromeObject is a Map Object property of PlaindromeTest that's computed to return the palindrome status of inputs on an argument by argument basis or on every new line when string literals are used, it then processes each input phrases by phrases or sentences by sentences, while leaving words to be tested by wordsPalindromeObject).
- It should also be noted that the palindrome status of a word or individual argument phrase appearing several times (irrespective of case and punctuation, and even irrespective of spaces between a string in the case of phrasesPalindromeObject) would only have its palindrome status showed once, and that's the last time that the word or phrase occurs.
- palindromesOnlyObject is a Map Object property of PalindromeTest that's computed to only return all the Phrases and Words that have been tested to be palindromes.
- Finally, other properties have been added, like passedPhrasesArray etc to allow for a more robust processing and intuitive presentation of the Palindrome Detector Result, an example of which is shown by a live palindrome tester that's hosted at [*Palindrome Tester*](https://snoseeds.github.io/snoseeds-palindrome/palindrome-web/palindrome.html), and its corresponding repository is at my [*GitHub repo*](https://github.com/snoseeds/snoseeds-palindrome).

$ npm install --global snoseeds-palindrome<br/>
$ vim test.js<br/>
let PalindromeTest = require("snoseeds-palindrome");<br/>
let napoleonsLament = new PalindromeTest("Able was I, ere I saw Elba", "Madam, I'm Adam", "Reconocer reconocer", "Obviously, it's not MALLAM.", "oBVIOUSLY, IT'S NOT MALLAM.", "A man, a plan, a canal-Panama");<br/>
napoleonsLament;  
$ node test.js<br/>
napoleonsLament
PalindromeTest {  
  argumentsArray:
   [ 'Able was I, ere I saw Elba',  
     'Madam, I\'m Adam',  
     'Reconocer reconocer',  
     'Obviously, it\'s not MALLAM.',  
     'oBVIOUSLY, IT\'S NOT MALLAM.',  
     'A man, a plan, a canal-Panama' ],  
  UniquePhrasesObject:
   Map {
     'ablewasiereisawelba' => 'Able was I, ere I saw Elba',  
     'madamimadam' => 'Madam, I\'m Adam',  
     'reconocerreconocer' => 'Reconocer reconocer',  
     'obviouslyitsnotmallam' => 'oBVIOUSLY, IT\'S NOT MALLAM.',  
     'amanaplanacanalpanama' => 'A man, a plan, a canal-Panama' },
  phrasesArray:
   [ 'Able was I, ere I saw Elba',  
     'Madam, I\'m Adam',  
     'Reconocer reconocer',  
     'oBVIOUSLY, IT\'S NOT MALLAM.',  
     'A man, a plan, a canal-Panama' ],
  UniqueWordsObject:
   Map {
     'able' => 'Able',  
     'was' => 'was',  
     'ere' => 'ere',  
     'saw' => 'saw',  
     'elba' => 'Elba',  
     'madam' => 'Madam',  
     'i\'m' => 'I\'m',  
     'adam' => 'Adam',  
     'reconocer' => 'reconocer',  
     'obviously' => 'oBVIOUSLY',  
     'it\'s' => 'IT\'S',  
     'not' => 'NOT',  
     'mallam' => 'MALLAM',  
     'man' => 'man',  
     'plan' => 'plan',  
     'canal' => 'canal',  
     'panama' => 'Panama' },  
  wordsArray:
   [ 'Able',  
     'was',  
     'ere',  
     'saw',  
     'Elba',  
     'Madam',  
     'I\'m',  
     'Adam',  
     'reconocer',  
     'oBVIOUSLY',  
     'IT\'S',  
     'NOT',  
     'MALLAM',  
     'man',  
     'plan',  
     'canal',  
     'Panama' ],<br>
  phrasesPalindromeObject:
   Map {
     'ablewasiereisawelba' => true,  
     'madamimadam' => true,  
     'reconocerreconocer' => true,  
     'obviouslyitsnotmallam' => false,  
     'amanaplanacanalpanama' => true },  
  wordsPalindromeObject:  
   Map {  
     'able' => false,  
     'was' => false,  
     'ere' => true,  
     'saw' => false,  
     'elba' => false,  
     'madam' => true,  
     'i\'m' => false,  
     'adam' => false,  
     'reconocer' => true,  
     'obviously' => false,  
     'it\'s' => false,  
     'not' => false,  
     'mallam' => true,  
     'man' => false,  
     'plan' => false,  
     'canal' => false,  
     'panama' => false },  
  palindromesOnlyObject:  
   Map {  
     'madamimadam' => true,  
     'reconocerreconocer' => true,  
     'amanaplanacanalpanama' => true,  
     'ere' => true,  
     'madam' => true,  
     'reconocer' => true,  
     'mallam' => true },  
  passedPhrasesPalindrome:  
   [ 'Madam, I\'m Adam',  
     'Reconocer reconocer',  
     'A man, a plan, a canal-Panama' ],  
  passedWordsPalindrome: [ 'ere', 'Madam', 'reconocer', 'MALLAM' ],  
  formOfPassedPhrasesPalindrome: [ 'madamimadam', 'reconocerreconocer',   'amanaplanacanalpanama' ],  
  formOfPassedWordsPalindrome: [ 'ere', 'madam', 'reconocer', 'mallam' ] }  
