class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
