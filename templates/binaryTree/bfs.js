/**
 * Binary Tree: BFS
 */
let fn = (root) => {
  let queue = [root];
  let ans = 0;

  while (queue.length) {
    let currentLength = queue.length;
    // do logic for current level

    let nextQueue = [];

    for (let i = 0; i < currentLength; i++) {
      let node = queue[i];
      // do logic
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }

  return ans;
};
