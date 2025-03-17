/**
 * Longest Substring without repeating character
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * Example 1:
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 */
const assert = require("node:assert").strict;

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substr = "";
  let maxSubstr = substr;

  for (let c of s) {
    if (!substr.includes(c)) {
      substr += c;
    } else {
      if (substr.length > maxSubstr.length) maxSubstr = substr;
      const index = substr.indexOf(c);
      if (index === substr.length - 1) {
        substr = c;
      } else {
        substr = substr.substring(index + 1) + c;
      }
    }
    console.log(substr);
  }

  return maxSubstr.length > substr.length ? maxSubstr.length : substr.length;
};

assert.deepStrictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
assert.deepStrictEqual(lengthOfLongestSubstring("bbbbb"), 1);
assert.deepStrictEqual(lengthOfLongestSubstring("pwwkew"), 3);
assert.deepStrictEqual(lengthOfLongestSubstring("dvdf"), 3);
