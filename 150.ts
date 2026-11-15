/**
 * 150. Evaluate Reverse Polish Notion
 *
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 *
 * Evaluate the expression. Return an integer that represents the value of the expression.
 *
 * Note that:
 *
 * The valid operators are '+', '-', '*', and '/'.
 * Each operand may be an integer or another expression.
 * The division between two integers always truncates toward zero.
 * There will not be any division by zero.
 * The input represents a valid arithmetic expression in a reverse polish notation.
 * The answer and all the intermediate calculations can be represented in a 32-bit integer.
 *
 *
 * Example 1:
 *
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * Example 2:
 *
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 * Example 3:
 *
 * Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * Output: 22
 * Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 *
 *
 * Constraints:
 *
 * 1 <= tokens.length <= 104
 * tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 */

function evalRPN(tokens: string[]): number {
  const operators = "+-*/";
  const numbs: number[] = [];
  let index = 0;

  while (index < tokens.length) {
    if (operators.includes(tokens[index])) {
      const n2 = numbs.pop() as number;
      const n1 = numbs.pop() as number;
      numbs.push(operation(n1, n2, tokens[index]));
    } else {
      numbs.push(Number(tokens[index]));
    }
    console.debug(numbs);
    index++;
  }
  return numbs[0];
}

/**
 *
 * @param n1 number
 * @param n2 number
 * @param operator string
 * @returns number
 */
function operation(n1: number, n2: number, operator: string): number {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return Math.abs(n2) > Math.abs(n1) ? 0 : Math.floor(n1 / n2);
    default:
      return 0;
  }
}
// console.log(evalRPN(["2", "1", "+", "3", "*"])); // output: 9
// console.log(evalRPN(["4", "13", "5", "/", "+"])); // output: 6
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // output: 22
console.log(
  evalRPN([
    "-78",
    "-33",
    "196",
    "+",
    "-19",
    "-",
    "115",
    "+",
    "-",
    "-99",
    "/",
    "-18",
    "8",
    "*",
    "-86",
    "-",
    "-",
    "16",
    "/",
    "26",
    "-14",
    "-",
    "-",
    "47",
    "-",
    "101",
    "-",
    "163",
    "*",
    "143",
    "-",
    "0",
    "-",
    "171",
    "+",
    "120",
    "*",
    "-60",
    "+",
    "156",
    "/",
    "173",
    "/",
    "-24",
    "11",
    "+",
    "21",
    "/",
    "*",
    "44",
    "*",
    "180",
    "70",
    "-40",
    "-",
    "*",
    "86",
    "132",
    "-84",
    "+",
    "*",
    "-",
    "38",
    "/",
    "/",
    "21",
    "28",
    "/",
    "+",
    "83",
    "/",
    "-31",
    "156",
    "-",
    "+",
    "28",
    "/",
    "95",
    "-",
    "120",
    "+",
    "8",
    "*",
    "90",
    "-",
    "-94",
    "*",
    "-73",
    "/",
    "-62",
    "/",
    "93",
    "*",
    "196",
    "-",
    "-59",
    "+",
    "187",
    "-",
    "143",
    "/",
    "-79",
    "-89",
    "+",
    "-",
  ]),
); // output: 165
