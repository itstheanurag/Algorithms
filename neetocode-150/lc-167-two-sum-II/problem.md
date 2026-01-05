# 167. Two Sum II - Input Array Is Sorted

## Problem Statement

Given a **1-indexed** array of integers `numbers` that is already sorted in **non-decreasing order**, find two numbers such that they add up to a specific `target` number.

Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, **added by one** as an integer array `[index1, index2]` of length 2.

> **Constraints:**
> - There is **exactly one** solution
> - You may **not use the same element twice**
> - Your solution must use only **constant extra space**

---

## Examples

### Example 1: Standard Case
```
Input:  numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]

Visual (two-pointer approach):
  Index:    1    2    3    4
  Values:  [2,   7,  11,  15]
            ↑              ↑
           left          right
           
  2 + 15 = 17 > 9  →  move right ←
  2 + 11 = 13 > 9  →  move right ←
  2 + 7  = 9  ✓   →  return [1, 2]

Explanation: numbers[1] + numbers[2] = 2 + 7 = 9
```

### Example 2: Non-Adjacent Pair
```
Input:  numbers = [2, 3, 4], target = 6
Output: [1, 3]

Visual:
  Index:    1    2    3
  Values:  [2,   3,   4]
            ↑         ↑
           left     right
           
  2 + 4 = 6 ✓  →  return [1, 3]

Explanation: numbers[1] + numbers[3] = 2 + 4 = 6
```

### Example 3: Negative Numbers
```
Input:  numbers = [-1, 0], target = -1
Output: [1, 2]

Visual:
  Index:    1    2
  Values:  [-1,  0]
             ↑   ↑
            left right
            
  -1 + 0 = -1 ✓  →  return [1, 2]

Explanation: numbers[1] + numbers[2] = -1 + 0 = -1
```

### Example 4: Same Values
```
Input:  numbers = [1, 2, 2, 3], target = 4
Output: [2, 3]

Visual:
  Index:    1    2    3    4
  Values:  [1,   2,   2,   3]
            ↑              ↑
           left          right
           
  1 + 3 = 4 ✓  →  But wait, that's [1, 4]
  
  Actually:
  left=1, right=4: 1 + 3 = 4 ✓ → return [1, 4]? 
  
  OR if target was 4:
  2 + 2 = 4 ✓  →  return [2, 3]

Explanation: Two 2s at indices 2 and 3 sum to 4
```

### Example 5: Large Array
```
Input:  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 19
Output: [9, 10]

Visual:
  Pointers converge toward the end
  9 + 10 = 19 ✓

Explanation: numbers[9] + numbers[10] = 9 + 10 = 19
```

### Example 6: Mixed Positive and Negative
```
Input:  numbers = [-5, -3, 0, 2, 4, 6, 8], target = 3
Output: [2, 6]

Visual:
  Index:    1    2   3   4   5   6   7
  Values:  [-5, -3,  0,  2,  4,  6,  8]
  
  -3 + 6 = 3 ✓  →  return [2, 6]

Explanation: numbers[2] + numbers[6] = -3 + 6 = 3
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| Array length | `2 <= numbers.length <= 3 × 10⁴` |
| Element value | `-1000 <= numbers[i] <= 1000` |
| Target value | `-1000 <= target <= 1000` |
| Array order | Sorted in **non-decreasing** order |
| Solution guarantee | **Exactly one** solution exists |

---

## Hints

1. 💡 The array is **sorted** — use this property!
2. 💡 Use **two pointers**: one at the start, one at the end.
3. 💡 If sum is too large, move the **right pointer** left.
4. 💡 If sum is too small, move the **left pointer** right.
5. 💡 O(1) space is required — **no hash maps** allowed.

---

## Approach

### Two Pointer Technique

Since the array is sorted, we can use two pointers to find the pair efficiently.

```
function twoSum(numbers, target):
    left = 0
    right = numbers.length - 1
    
    while left < right:
        currentSum = numbers[left] + numbers[right]
        
        if currentSum == target:
            return [left + 1, right + 1]  // 1-indexed
        else if currentSum < target:
            left++   // Need larger sum
        else:
            right--  // Need smaller sum
    
    return []  // Should never reach here
```

### Why Two Pointers Work

```
Sorted array: [a, b, c, d, e, f]
               ↑              ↑
              left          right

• If a + f > target: f is too large for ANY element
  → We can safely eliminate f (move right left)
  
• If a + f < target: a is too small for ANY element
  → We can safely eliminate a (move left right)
  
• If a + f == target: Found it!
```

### Alternative: Binary Search
For each element, binary search for its complement.
- Time: O(n log n)
- Less optimal than two pointers

### Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| **Two Pointers** | O(n) | O(1) ✓ |
| Binary Search | O(n log n) | O(1) |
| Hash Map | O(n) | O(n) ✗ |

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Returning 0-indexed result | Add 1 to both indices |
| Using hash map | Violates O(1) space constraint |
| Not handling negatives | Two pointers work with negatives too |
| Checking same element twice | Ensure `left < right` |

---

## Edge Cases to Consider

- ✅ **Two elements** only (minimum case)
- ✅ **Negative numbers** in array
- ✅ **Target is negative** 
- ✅ **Duplicate values** (e.g., [2, 2] target=4)
- ✅ Solution at **array ends** (first and last elements)
- ✅ Solution in the **middle** of array

---

## Comparison: Two Sum vs Two Sum II

| Aspect | Two Sum (LC 1) | Two Sum II (LC 167) |
|--------|----------------|---------------------|
| Array sorted? | No | Yes |
| Indexing | 0-indexed | 1-indexed |
| Optimal approach | Hash Map | Two Pointers |
| Space allowed | O(n) | O(1) |

---

## Related Topics
`Array` | `Two Pointers` | `Binary Search`

## Difficulty
🟡 **Medium**