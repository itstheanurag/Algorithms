# 36. Valid Sudoku

## Problem Statement

Determine if a `9 x 9` Sudoku board is **valid**. Only the filled cells need to be validated according to the following rules:

1. Each **row** must contain the digits `1-9` without repetition.
2. Each **column** must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

> **Note**:
> - A Sudoku board (partially filled) could be valid but is **not necessarily solvable**.
> - Only the filled cells need to be validated according to the mentioned rules.

---

## Examples

### Example 1: Valid Board

```
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: true

Explanation: All rows, columns, and 3x3 sub-boxes contain unique digits.
```

### Example 2: Invalid Board

```
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: false

Explanation: Two 8's in the top-left 3x3 sub-box (at positions [0,0] and [3,0]).
```

### Example 3: Empty Board

```
Input: board (all ".")
Output: true

Explanation: No filled cells means no conflicts.
```

### Example 4: Row Conflict

```
Input: A board with [1,1,x,x,x,x,x,x,x] in first row
Output: false

Explanation: Digit 1 repeats in the first row.
```

### Example 5: Column Conflict

```
Input: A board with 5's in positions [0,0] and [5,0]
Output: false

Explanation: Digit 5 repeats in the first column.
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| `board.length` | `9` |
| `board[i].length` | `9` |
| `board[i][j]` | A digit `1-9` or `'.'` |

---

## Hints

1. 💡 **Three Checks**: Validate rows, columns, and 3x3 boxes separately.
2. 💡 **Hash Sets**: Use sets to track seen digits for each row, column, and box.
3. 💡 **Box Index**: For a cell at `(r, c)`, its box index is `(r/3) * 3 + (c/3)`.
4. 💡 **Single Pass**: You can validate all three conditions in one pass through the board.

---

## Approaches

### 1. Three Separate Passes

```
// Check each row
for row in board:
    if hasDuplicates(row digits): return false

// Check each column
for col in 0..8:
    if hasDuplicates(column col digits): return false

// Check each 3x3 box
for box in 0..8:
    if hasDuplicates(box digits): return false

return true
```

| Time | Space |
|------|-------|
| O(81) = O(1) | O(9) = O(1) |

### 2. Single Pass with Hash Sets (Optimal)

```
rows = array of 9 sets
cols = array of 9 sets
boxes = array of 9 sets

for r = 0 to 8:
    for c = 0 to 8:
        digit = board[r][c]
        if digit == '.': continue
        
        boxIndex = (r / 3) * 3 + (c / 3)
        
        if digit in rows[r] or cols[c] or boxes[boxIndex]:
            return false
        
        rows[r].add(digit)
        cols[c].add(digit)
        boxes[boxIndex].add(digit)

return true
```

| Time | Space |
|------|-------|
| O(81) = O(1) | O(81) = O(1) |

---

## Visual Explanation

### Box Index Calculation

```
Box indices for 9x9 board:

  0  1  2 | 3  4  5 | 6  7  8   (columns)
 ─────────┼─────────┼─────────
0 │  0   │   1   │   2   │  
1 │  0   │   1   │   2   │  (rows 0-2)
2 │  0   │   1   │   2   │  
 ─────────┼─────────┼─────────
3 │  3   │   4   │   5   │  
4 │  3   │   4   │   5   │  (rows 3-5)
5 │  3   │   4   │   5   │  
 ─────────┼─────────┼─────────
6 │  6   │   7   │   8   │  
7 │  6   │   7   │   8   │  (rows 6-8)
8 │  6   │   7   │   8   │  

Formula: boxIndex = (row / 3) * 3 + (col / 3)
```

---

## Edge Cases to Consider

- ✅ Completely empty board (all `.`)
- ✅ Fully filled valid board
- ✅ Duplicate in row only
- ✅ Duplicate in column only
- ✅ Duplicate in 3x3 box only
- ✅ Duplicate at edges of a 3x3 box

---

## Related Topics

`Array` | `Hash Table` | `Matrix`

## Difficulty

🟡 **Medium**

## NeetCode Category

**Arrays & Hashing** - Problem 6 of 9
