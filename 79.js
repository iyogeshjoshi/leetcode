/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 *
 * Example 2:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 *
 * Example 3:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 */
const assert = require('node:assert').strict;

/**
 * @param {character[][]} BOARD
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  // Define the directions for moving in the grid
  const directions = [
    [0, 1], // right
    [1, 0], // bottom
    [0, -1], // left
    [-1, 0], // top
  ];

  // Get the dimensions of the board
  const rows = board.length;
  const cols = board[0].length;

  function backtrack(r, c, index) {
    // If the current character matches the last character of the word, return true
    if (index === word.length) return true;

    // If the current cell is out of bounds or doesn't match the current character, return false
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) {
      return false;
    }

    // Mark the cell as visited by changing its value
    const temp = board[r][c];
    board[r][c] = '#';

    for (const [dr, dc] of directions) {
      if (backtrack(r + dr, c + dc, index + 1)) {
        return true;
      }
    }

    // Unmark the cell as visited (backtrack)
    board[r][c] = temp;

    return false;
  }

  // Iterate through each cell in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};

assert.strictEqual(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED',
  ),
  true,
);
assert.strictEqual(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE',
  ),
  true,
);
assert.strictEqual(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB',
  ),
  false,
);
assert.strictEqual(exist([['C', 'A', 'A'], ['A', 'A', 'A'], ['B', 'C', 'D']], 'AAB'), true);
