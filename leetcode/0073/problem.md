# 73. Set Matrix Zeroes

---

## Problem Statement

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.

You must do it **in place**.

---

## Examples

### Example 1: Small Matrix
```
Input: matrix = [[1, 1, 1],
                  [1, 0, 1],
                  [1, 1, 1]]
Output: [[1, 0, 1],
         [0, 0, 0],
         [1, 0, 1]]
```

### Example 2: Rectangular Matrix
```
Input: matrix = [[0, 1, 2, 0],
                  [3, 4, 5, 2],
                  [1, 3, 1, 5]]
Output: [[0, 0, 0, 0],
         [0, 4, 5, 0],
         [0, 3, 1, 0]]
```

---

## Constraints

| Constraint | Value |
|------------|-------|
| `m` | `matrix.length` |
| `n` | `matrix[0].length` |
| `1 <= m, n <= 200` | Range of dimensions |
| `-2³¹ <= matrix[i][j] <= 2³¹ - 1` | Range of values |

---

## Follow-up
- A straightforward solution using `O(mn)` space is probably a bad idea.
- A simple improvement uses `O(m + n)` space, but still not the best solution.
- Could you devise a **constant space** solution?

---

## Hints

1. 💡 Can you use the **first row** and **first column** as markers?
2. 💡 You'll need extra variables to track if the first row and first column themselves should be zeroed.
3. 💡 Use `matrix[i][0]` and `matrix[0][j]` to record if row `i` or column `j` should be zero.

---

## Approach

### Algorithm (Optimal)
1. **Initial Check**: Check if the first row and first column contain any zeros. Use two flags (`firstRowZero`, `firstColZero`).
2. **Marking**: Iterate through the rest of the matrix (`1` to `m-1`, `1` to `n-1`). If `matrix[i][j] == 0`, set `matrix[i][0] = 0` and `matrix[0][j] = 0`.
3. **Updating**: Iterate through the matrix again and use the marks in the first row/column to set zeroes.
4. **Final Step**: If `firstRowZero` is true, set the entire first row to zero. If `firstColZero` is true, set the entire first column to zero.

### Complexity Analysis
| Metric | Value |
|--------|-------|
| **Time** | O(m × n) - Two passes through the matrix |
| **Space** | O(1) - Constant extra space used for flags |

---

## Related Topics
`Array` | `Hash Table` | `Matrix`

## Difficulty
🟡 **Medium**
