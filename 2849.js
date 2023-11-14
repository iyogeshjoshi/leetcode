/**
 * You are given four integers sx, sy, fx, fy, and a non-negative integer t.
 * In an infinite 2D grid, you start at the cell (sx, sy). Each second, you must move to any of its adjacent cells.
 * Return true if you can reach cell (fx, fy) after exactly t seconds, or false otherwise.
 * A cell's adjacent cells are the 8 cells around it that share at least one corner with it. You can visit the same cell several times.
 *
 * examples:
 * Input: sx = 2, sy = 4, fx = 7, fy = 7, t = 6
 * Output: true
 * Explanation: Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above.
 *
 * Input: sx = 3, sy = 1, fx = 7, fy = 3, t = 3
 * Output: false
 * Explanation: Starting at cell (3, 1), it takes at least 4 seconds to reach cell (7, 3) by going through the cells depicted in the picture above.
 * Hence, we cannot reach cell (7, 3) at the third second.
 */

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function (sx, sy, fx, fy, t) {
  if (sx == fx && sy == fy) {
    return false;
  }

  let time = 0;
  let x = 0,
    y = 0;

  if (sx < fx) {
    x = fx - sx;
  } else if (sx > fx) {
    x = sx - fx;
  }

  if (sy < fy) {
    y = fy - sy;
  } else if (sy > fy) {
    y = sy - fy;
  }

  time = Math.abs(Math.max(x, y));

  return time <= t;
};

console.time("function");
// console.log(isReachableAtTime(2, 4, 7, 7, 6));
// console.log(isReachableAtTime(3, 1, 7, 3, 3));
// console.log(isReachableAtTime(1, 2, 1, 2, 1));
console.log(isReachableAtTime(3353934, 52272908, 671027402, 52272908, 56158573));
console.timeEnd("function");
/**
 * 7-2=5,7-4=3
 * 7-3=4, 3-1=2
 */
