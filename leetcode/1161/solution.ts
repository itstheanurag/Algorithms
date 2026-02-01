function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  let maxSum = -Infinity;
  let answerLevel = 1;
  let level = 1;

  const queue: TreeNode[] = [root];
  let index = 0;

  while (index < queue.length) {
    let levelSize = queue.length - index;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];
      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      answerLevel = level;
    }

    level++;
  }

  return answerLevel;
}
