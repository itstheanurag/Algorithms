function maxProduct(root: TreeNode | null): number {
  let total: number = 0,
    max: number = 0;
  const sum = (root: TreeNode | null) => {
    if (!root) return 0;
    const leftSum: number = sum(root.left);
    const rightSum: number = sum(root.right);
    const currentSum = leftSum + rightSum + root.val;
    max = Math.max(
      max,
      (total - leftSum) * leftSum,
      (total - rightSum) * rightSum,
    );

    return currentSum;
  };
  total = sum(root);
  sum(root);
  return max % (10 ** 9 + 7);
}
/*
INTUITION

If we cut exactly one edge in a binary tree, the tree splits into two subtrees.
The score of that cut is:

    (sum of subtree 1) × (sum of subtree 2)

So the real problem is not “where to cut”, but:
    “what is the sum of every possible subtree?”

Key observation:
If the total sum of the entire tree is T, and a subtree has sum S,
then cutting the edge above that subtree produces:
    S × (T − S)

Therefore:
1. First, compute the total sum of the tree.
2. Then, for every node, treat the subtree rooted at that node as one side of the cut.
3. Compute S for that subtree and update the maximum product S × (T − S).
4. A DFS is perfect here because it naturally computes subtree sums bottom-up.

We do two DFS passes:
- First pass: compute total sum of the tree.
- Second pass: compute each subtree sum and evaluate its product with the rest.

The maximum of all such products is the answer.
*/
