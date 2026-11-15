/* eslint-disable max-len */
/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 *
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * The test cases are generated so that the answer will be less than or equal to 2 * 109.
 *
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 *
 * Example 2:
 *
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 */
const assert = require("node:assert").strict;

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let key = `${m},${n}`;

  if (key in memory) {
    return memory[key];
  }

  if (m === 1 || n === 1) {
    memory[key] = 1;
    return 1;
  }

  const res = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);

  memory[key] = res;

  return res;
};

var memory = {};

assert.strictEqual(uniquePaths(3, 7), 28);
assert.strictEqual(uniquePaths(3, 2), 3);
assert.strictEqual(uniquePaths(51, 9), 1916797311);
