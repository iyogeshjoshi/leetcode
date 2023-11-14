/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = [],
    num2 = [];
  let res = 0;
  let N1 = l1,
    N2 = l2;

  while (N1 || N2) {
    if (N1?.val) {
      num1.push(N1.val);
      N1 = N1.next;
    }
    if (N2?.val) {
      num2.push(N2.val);
      N2 = N2.next;
    }
  }

  console.log(num1, num2);

  num1 = num1.reverse().join("");
  num2 = num2.reverse().join("");

  res = Number(num1) + Number(num2);
  res = res.toString().split("").reverse();

  console.log(num1, num2, res);

  const result = [];

  for (let i = 0; i < res.length; i++) {
    let node = new ListNode(res[i]);

    result.push(node);
  }

  for (let i = 0; i < result.length; i++) {
    if (i < result.length - 1) {
      result[i].next = result[i + 1];
    }
  }

  return result[0];
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.time("add number");
const result = addTwoNumbers(l1, l2);
console.timeEnd("add number");
