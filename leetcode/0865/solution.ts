function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  const left = height(root.left);
  const right = height(root.right);

  if (left == right) return root;
  let node: TreeNode = null;
  if (left > right) node = subtreeWithAllDeepest(root.left);
  if (left < right) node = subtreeWithAllDeepest(root.right);
  return node;
}

function height(root: TreeNode | null): number {
  if (!root) return 0;
  const left = height(root.left);
  const right = height(root.right);
  return Math.max(left, right) + 1;
}
