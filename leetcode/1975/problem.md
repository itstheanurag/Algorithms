# 1975. Maximum Matrix Sum

## Problem Statement

You are given an `n x n` integer matrix. You can perform the following operation **any number of times**:

> Choose any two **adjacent** elements of the matrix and multiply each of them by `-1`.

Two elements are considered adjacent if and only if they **share a border** (horizontally or vertically, not diagonally).

Return the **maximum sum** of the matrix's elements using the operation mentioned above.

---

## Examples

### Example 1: All Negatives Can Be Eliminated
```
Input:  matrix = [[1, -1],
                  [-1, 1]]
Output: 4

Step-by-step:
  Initial:    [[ 1, -1],      Negative count: 2
               [-1,  1]]
  
  Step 1 - Multiply first row elements by -1:
              [[-1,  1],
               [-1,  1]]
  
  Step 2 - Multiply first column elements by -1:
              [[ 1,  1],      Negative count: 0
               [ 1,  1]]
  
  Sum: 1 + 1 + 1 + 1 = 4
```

### Example 2: Larger Matrix
```
Input:  matrix = [[1, 2, 3],
                  [-1, -2, -3],
                  [1, 2, 3]]
Output: 16

Step-by-step:
  Initial sum of absolute values: 1+2+3+1+2+3+1+2+3 = 18
  Negative count: 3 (odd)
  
  After optimal operations:
  - We can eliminate pairs of negatives
  - One negative must remain → assign it to smallest |value| = 1
  
  Maximum sum: 18 - 2×1 = 16
  
Explanation: When we have an odd count of negatives, we keep the 
smallest absolute value as negative to maximize the sum.
```

### Example 3: Single Negative (Odd Count)
```
Input:  matrix = [[1, 2],
                  [3, -4]]
Output: 8

Breakdown:
  Absolute values sum: 1 + 2 + 3 + 4 = 10
  Negative count: 1 (odd)
  Minimum absolute value: 1
  
  Maximum sum: 10 - 2×1 = 8
  
  Final optimal matrix: [[-1, 2],
                         [3, 4]]
```

### Example 4: All Positive
```
Input:  matrix = [[5, 3],
                  [2, 7]]
Output: 17

Explanation: Already optimal! No operations needed.
Sum: 5 + 3 + 2 + 7 = 17
```

### Example 5: Contains Zero
```
Input:  matrix = [[1, 0],
                  [-1, 2]]
Output: 4

Breakdown:
  Even though we have 1 negative, zero allows us to "absorb" it.
  We can move the negative sign to the zero position.
  
  Result: 1 + 0 + 1 + 2 = 4
  
Note: Zero counts as a number with |0| = 0, so if negative 
count is odd, we can assign the negative to zero with no penalty.
```

### Example 6: Large Negative Values
```
Input:  matrix = [[-100, -200],
                  [-300, -400]]
Output: 1000

Breakdown:
  Absolute values sum: 100 + 200 + 300 + 400 = 1000
  Negative count: 4 (even)
  
  All negatives can be eliminated: sum = 1000
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| Matrix dimensions | `n == matrix.length == matrix[i].length` |
| Matrix size | `2 <= n <= 250` |
| Element value | `-10⁵ <= matrix[i][j] <= 10⁵` |

---

## Hints

1. 💡 Adjacent swaps can move a negative sign **anywhere** in the matrix.
2. 💡 Two negatives can always be **eliminated** (made positive) through a series of operations.
3. 💡 If the count of negative numbers is **even**, all can become positive.
4. 💡 If the count is **odd**, exactly **one** negative must remain — make it the **smallest absolute value**.
5. 💡 A **zero** in the matrix means you can always achieve sum of all absolute values.

---

## Approach

### Key Insight
The operation allows us to "move" negative signs around the matrix. Two adjacent negatives cancel out. Therefore:
- **Even negatives**: All can be made positive → sum of |all elements|
- **Odd negatives**: One remains negative → sum of |all elements| - 2 × |smallest element|

### Algorithm
1. Calculate the sum of absolute values of all elements
2. Count negative numbers
3. Track the minimum absolute value in the matrix
4. If negative count is even: return sum
5. If negative count is odd: return sum - 2 × minAbsValue

### Pseudocode
```
function maxMatrixSum(matrix):
    totalSum = 0
    negativeCount = 0
    minAbsValue = INFINITY
    
    for each row in matrix:
        for each element in row:
            totalSum += |element|
            minAbsValue = min(minAbsValue, |element|)
            
            if element < 0:
                negativeCount += 1
    
    if negativeCount is even:
        return totalSum
    else:
        return totalSum - 2 × minAbsValue
```

### Why This Works
```
Visual proof of moving negatives:

    [a, -b]     →  [-a, b]      (swap sign between adjacent)
    [c,  d]        [ c, d]

We can chain these swaps to move any negative to any position.
Two negatives on adjacent cells can both become positive:

    [-a, -b]    →  [a, b]       (both negatives cancel)
    [ c,  d]       [c, d]
```

### Complexity Analysis
| Metric | Value |
|--------|-------|
| **Time** | O(n²) - single pass through matrix |
| **Space** | O(1) - constant extra space |

---

## Edge Cases to Consider

- ✅ Matrix with **all positive** numbers
- ✅ Matrix with **all negative** numbers
- ✅ Matrix containing **zero** (acts as a negative absorber)
- ✅ **Single negative** in the matrix
- ✅ Matrix where minimum absolute value **is negative**
- ✅ Large matrix near constraint limits (250 × 250)

---

## Related Topics
`Array` | `Matrix` | `Greedy` | `Math`

## Difficulty
🟡 **Medium**
