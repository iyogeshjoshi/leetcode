/**
 * Given four integers sx, sy, tx, and ty, return true if it is possible to convert the point (sx, sy)
 * to the point (tx, ty) through some operations, or false otherwise.
 * The allowed operation on some point (x, y) is to convert it to either (x, x + y) or (x + y, y).
 *
 * example:
 * Input: sx = 1, sy = 1, tx = 3, ty = 5
 * Output: true
 * Explanation:
 * One series of moves that transforms the starting point to the target is:
 * (1, 1) -> (1, 2)
 * (1, 2) -> (3, 2)
 * (3, 2) -> (3, 5)
 *
 * Input: sx = 1, sy = 1, tx = 2, ty = 2
 * Output: false
 *
 * Input: sx = 1, sy = 1, tx = 1, ty = 1
 * Output: true
 */

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  let x = sx,
    y = sy;
  const isReached = () => x == tx && y == ty;

  while (x < tx || y < ty) {
    if (y < ty) {
      y = x + y;
    }
    if (isReached()) break;
    if (x < tx) {
      x = x + y;
    }
    if (isReached()) break;
  }

  console.log(x, y);

  return isReached();
};

console.time("function");
// console.log(reachingPoints(1, 1, 3, 5));
console.log(reachingPoints(3, 3, 12, 9));
console.timeEnd("function");
