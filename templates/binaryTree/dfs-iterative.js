/**
 * Binary Tree: DFS (iterative)
 */
let dfs = (root) => {
  let stack = [root];
  let ans = 0;

  while (stack.length) {
    let node = stack.pop();
    // do logic
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return ans;
};
