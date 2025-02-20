/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let _word1 = word1.split("");
  let _word2 = word2.split("");
  let length = Math.min(_word1.length, _word2.length);
  let result = [];

  while (_word1.length > 0 || _word2.length > 0) {
    _word1.length > 0 && result.push(_word1.shift());
    _word2.length > 0 && result.push(_word2.shift());
  }
  _word1.length > 0 && result.push(_word1.join(""));
  _word2.length > 0 && result.push(_word2.join(""));

  return result.join("");
};

// output

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
console.log(mergeAlternately("eebeddcd", "caeeeecd"));
