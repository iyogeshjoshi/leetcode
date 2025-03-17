/**
 * Check if Number is a Sum of Powers of three
 *
 * Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.
 *
 * An integer y is a power of three if there exists an integer x such that y == 3x.
 *
 * Example 1:
 *
 * Input: n = 12
 * Output: true
 * Explanation: 12 = 31 + 32
 * Example 2:
 *
 * Input: n = 91
 * Output: true
 * Explanation: 91 = 30 + 32 + 34
 * Example 3:
 *
 * Input: n = 21
 * Output: false
 *
 * Constraints:
 *
 * 1 <= n <= 10^7
 */
const assert = require("assert");

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  let i = 0;
  let remainingSum = n;
  const powers = [];
  console.log({ n });

  while (remainingSum > 0) {
    let num = 3 ** i;

    if (num >= remainingSum && i == 0) {
      break;
    }

    if (num >= remainingSum && i > 0) {
      let pow = num == remainingSum ? i : i - 1;
      if (powers.includes(pow)) {
        return false;
      }
      remainingSum -= 3 ** pow;
      powers.push(pow);
      i = -1;
    }

    console.log({ i, num, remainingSum, powers });
    i++;
  }
  console.log(remainingSum);
  if (remainingSum > 0 && powers.includes(0)) {
    return false;
  }

  return remainingSum == 0 ? true : remainingSum - 3 ** 0 === 0;
};

// assert.deepStrictEqual(checkPowersOfThree(12), true);
// assert.deepStrictEqual(checkPowersOfThree(91), true);
// assert.deepStrictEqual(checkPowersOfThree(21), false);
// assert.deepStrictEqual(checkPowersOfThree(18), false);
assert.deepStrictEqual(checkPowersOfThree(11), false);
