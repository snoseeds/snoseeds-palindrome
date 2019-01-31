let assert = require("assert");
let PalindromeTest = require("../index.js");

describe("PalindromeTest", () => {
  describe("#phrasesPalindromeObject", () => {

    it("should return false for a non-palindrome phrase", () => {
      let nonPalindrome = new PalindromeTest("apple is not a palindrome");
      assert(false === Array.from(nonPalindrome.phrasesPalindromeObject.values())[0]);
    })

    it("should return true for a plain palindrome phrase", () => {
      let plainPalindrome = new PalindromeTest("reconocer reconocer");
      assert(true === Array.from(plainPalindrome.phrasesPalindromeObject.values())[0]);
    })

    it("should return true for a mixed-case palindrome phrase", () => {
      let mixedCasePalindrome = new PalindromeTest("A man a plan a Canal panama");
      assert.strictEqual(Array.from(mixedCasePalindrome.phrasesPalindromeObject.values())[0], true);
    })

    it("should return true for a punctuated-phrase and mixed case palindrome", () => {
      let punctuatedPhrasePalindrome = new PalindromeTest("Able was I, ere I saw Elba");
      assert.strictEqual(Array.from(punctuatedPhrasePalindrome.phrasesPalindromeObject.values())[0], true);
    })

    it("should return corresponding palindrome status of each string in a multiple strings arguments", () => {
      let multipleStringsArgumentByStrings = new PalindromeTest("Able was I, ere I saw Elba", "reconocer reconocer", "Mallam, contiguous palindrome words give palindrome phrase");
      let palArray = Array.from(multipleStringsArgumentByStrings.phrasesPalindromeObject.values());
      assert(true === palArray[0] && palArray[1] && !palArray[2]);
    })

  })
});

describe("PalindromeTest", () => {
  describe("#wordsPalindromeObject", () => {

    it("should return false for a non-palindrome word", () => {
      let nonPalindrome = new PalindromeTest("apple");
      assert(false === Array.from(nonPalindrome.wordsPalindromeObject.values())[0]);
    })

    it("should return true for a plain palindrome word", () => {
      let plainPalindrome = new PalindromeTest("racecar");
      assert(true === Array.from(plainPalindrome.wordsPalindromeObject.values())[0]);
    })

    it("should return true for a mixed-case palindrome", () => {
      let mixedCasePalindrome = new PalindromeTest("RaceCar");
      assert(true === Array.from(mixedCasePalindrome.wordsPalindromeObject.values())[0])
    })

    it("should return corresponding palindrome status for each word and not single alphabet in a Single Punctuated String", () => {
      let multipleWordsStringByWords = new PalindromeTest("Able was I, ere I saw Elba");
      let palArray = Array.from(multipleWordsStringByWords.wordsPalindromeObject.values());
      assert(true === !palArray[0] && !palArray[1] && palArray[2] && !palArray[3] && !palArray[4]);
    })

    it("should return corresponding palindrome status for each word in Multiple Strings, punctuated or not", () => {
      let multipleStringsArgumentByWords = new PalindromeTest("Able was I, ere I saw Elba", "reconocer adam madam");
      let palArray = Array.from(multipleStringsArgumentByWords.wordsPalindromeObject.values());
      assert(true === !palArray[0] && !palArray[1] && palArray[2] && !palArray[3] && !palArray[4] && palArray[5] && !palArray[6] && palArray[7]);
    })

  })
});

describe("PalindromeTest", () => {
  describe("#palindromesOnlyObject", () => {

    it("should not contain the key for a non-palindrome", () => {
      let nonPalindrome = new PalindromeTest("apple");
      assert(false === nonPalindrome.palindromesOnlyObject.has("apple"));
    })

    it("should contain the key for a plain palindrome", () => {
      let plainPalindrome = new PalindromeTest("racecar");
      assert(true === plainPalindrome.palindromesOnlyObject.has("racecar") && true === Array.from(plainPalindrome.palindromesOnlyObject.values())[0]);
    })

    it("should contain the processed (all lower case and punctuation free) key for a mixed-case palindrome", () => {
      let mixedCasePalindrome = new PalindromeTest("RaceCar");
      assert(true === mixedCasePalindrome.palindromesOnlyObject.has("racecar") && true === Array.from(mixedCasePalindrome.palindromesOnlyObject.values())[0])
    })

    it("should return the processed keys for all palindrome phrase and words in a Single Punctuated String", () => {
      let singleStringArgument = new PalindromeTest("Able was I, ere I saw Elba");
      let palArrayValues = Array.from(singleStringArgument.palindromesOnlyObject.values());
      assert(true === singleStringArgument.palindromesOnlyObject.has("ablewasiereisawelba") && singleStringArgument.palindromesOnlyObject.has("ere") && palArrayValues[0] && palArrayValues[1]);
    })

    it("should return the processed unique keys for all Palindrome phrases and Words in Multiple Strings, punctuated or not", () => {
      let multipleStringsArguments = new PalindromeTest("Able was I, ere I saw Elba", "reconocer reconocer", "Mallam, contiguous palindrome words give palindrome phrase");
      let palArrayValues = Array.from(multipleStringsArguments.palindromesOnlyObject.values());
      let palArrayKeys = Array.from(multipleStringsArguments.palindromesOnlyObject.keys());
      assert.deepStrictEqual(["ablewasiereisawelba", "reconocerreconocer", "ere", "reconocer", "mallam"].concat([true, true, true, true, true]), palArrayKeys.concat(palArrayValues))
    })

  })
});
