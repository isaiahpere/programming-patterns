// check if two words are anagrams

/**
 * ASSUMPTIONS:
 *  1) inputs will always be alpahnumeric and lowercase
 *  2) inputs will always have a value
 *
 */

const checkAnagram = (firstWord, secondWord) => {
  // if length are not equal => not anagram
  if (firstWord.length !== secondWord.length) return false;

  // keep track of the characters in an object.
  const charTracker = {};

  // Loop 1: increment the char count by 1 and store in charTracker
  for (let i = 0; i < firstWord.length; i++) {
    let char = firstWord[i];
    // if item exist in charTracker increment else item is 1
    charTracker[char] ? (charTracker[char] += 1) : (charTracker[char] = 1);
  }

  console.log(charTracker);

  // loop 2: decrement the char count by 1 in charTracker
  for (let i = 0; i < secondWord.length; i++) {
    let char = secondWord[i];
    // if we can't find the letter of letter is "zero" before decrement then
    // is not an anagram because if we decrement it the letter will be -1
    // example: {a: 1, b:0}  ===> after decrement ===> {a: 1, b: -1}
    // this means there was an additional "b" in secondWord that was not found in firstWord
    if (!charTracker[char]) return false;
    else {
      charTracker[char] -= 1;
    }
    // view status of charTracker
    console.log(charTracker);
  }

  return true;
};

const isAnagramExample1 = checkAnagram("cinemas", "icemant");
console.log(isAnagramExample1);
console.log("======================");
const isAnagramExample2 = checkAnagram("cinema", "icemant");
console.log(isAnagramExample2);
console.log("======================");
const isAnagramExample3 = checkAnagram("cinemas", "icemant");
console.log(isAnagramExample3);
