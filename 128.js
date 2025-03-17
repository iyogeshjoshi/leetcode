/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 *
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * Example 2:
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * Example 3:
 *
 * Input: nums = [1,0,1,2]
 * Output: 3
 *
 * Constraints:
 *
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

const assert = require("node:assert").strict;
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const sortedNums = Array.from(new Set(nums.sort((a, b) => a - b)));
  let maxCount = 0;
  let count = 1;
  let continuos = true;

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] + 1 == sortedNums[i + 1]) {
      continuos ? count++ : (count = 2);
      continuos = true;
    } else {
      if (count > maxCount) maxCount = count;
      continuos = false;
    }
  }

  return maxCount > count ? maxCount : count;
};

assert.deepStrictEqual(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
assert.deepStrictEqual(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.deepStrictEqual(longestConsecutive([1, 0, 1, 2]), 3);
assert.deepStrictEqual(
  longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]),
  7,
);
assert.deepStrictEqual(
  longestConsecutive([
    4,
    0,
    -4,
    -2,
    2,
    5,
    2,
    0,
    -8,
    -8,
    -8,
    -8,
    -1,
    7,
    4,
    5,
    5,
    -4,
    6,
    6,
    -3,
  ]),
  5,
);
