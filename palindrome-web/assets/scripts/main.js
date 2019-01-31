let PalindromeTest = require("../../../index.js");

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
