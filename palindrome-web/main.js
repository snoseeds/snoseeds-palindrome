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
