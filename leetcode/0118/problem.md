# 118. Pascal's Triangle

---

## Problem Statement

Given an integer `numRows`, return the first `numRows` of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![Pascal's Triangle Animation](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

---

## Examples

### Example 1: 5 Rows
```
Input: numRows = 5
Output: [[1],
         [1, 1],
         [1, 2, 1],
         [1, 3, 3, 1],
         [1, 4, 6, 4, 1]]
```

### Example 2: 1 Row
```
Input: numRows = 1
Output: [[1]]
```

---

## Constraints

| Constraint | Value |
|------------|-------|
| `numRows` | `1 <= numRows <= 30` |

---

## Hints

1. 💡 The first and last element of each row is always `1`.
2. 💡 Any other element `res[i][j]` is equal to `res[i-1][j-1] + res[i-1][j]`.

---

## Approach

### Algorithm
1. Initialize a result array `res`.
2. Iterate from `i = 0` to `numRows - 1`:
   - Create a new row of size `i + 1`.
   - Set the first and last elements of the row to `1`.
   - For all elements in between, calculate `row[j] = res[i-1][j-1] + res[i-1][j]`.
   - Add the row to `res`.
3. Return `res`.

### Complexity Analysis
| Metric | Value |
|--------|-------|
| **Time** | O(numRows²) - Total number of elements is sum from 1 to numRows |
| **Space** | O(1) - If we don't count the output array, otherwise O(numRows²) |

---

## Related Topics
`Array` | `Dynamic Programming`

## Difficulty
🟢 **Easy**
