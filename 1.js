/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */
const assert = require("node:assert").strict;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length == 2) return [0, 1];
  const list = {};

  // prepare list with value as index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in list) {
      list[nums[i]].push(i);
    } else {
      list[nums[i]] = [i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in list) {
      const indices = list[diff];
      for (let index of indices) {
        if (index !== i) {
          return [i, index];
        }
      }
    }
  }
};

// test cases
assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
assert.deepStrictEqual(twoSum([3, 2, 3], 6), [0, 2]);
