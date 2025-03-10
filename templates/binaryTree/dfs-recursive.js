/**
 * Binary Tree: DFS (Recursive)
 */
let dfs = (root) => {
  if (!root) {
    return;
  }

  let ans = 0;

  // do logic
  dfs(root.left);
  dfs(root.right);
  return ans;
};
