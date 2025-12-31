# 217. Contains Duplicate

## Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

---

## Examples

### Example 1: Duplicate Exists
```
Input:  nums = [1, 2, 3, 1]
Output: true

Explanation: The element 1 occurs at indices 0 and 3.
```

### Example 2: All Distinct
```
Input:  nums = [1, 2, 3, 4]
Output: false

Explanation: All elements are distinct.
```

### Example 3: Multiple Duplicates
```
Input:  nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true

Explanation: Multiple elements repeat - 1 appears 3 times, 3 appears 3 times, 4 and 2 each appear twice.
```

### Example 4: Single Element
```
Input:  nums = [5]
Output: false

Explanation: With only one element, there can be no duplicates.
```

### Example 5: Two Same Elements
```
Input:  nums = [7, 7]
Output: true

Explanation: Minimum case for a duplicate - two identical elements.
```

### Example 6: Negative Numbers
```
Input:  nums = [-1, -2, -3, -1]
Output: true

Explanation: -1 appears at indices 0 and 3.
```

### Example 7: Large Range with Duplicate at End
```
Input:  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
Output: true

Explanation: Duplicate found at the very end of the array.
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| `nums.length` | `1 <= nums.length <= 10⁵` |
| `nums[i]` | `-10⁹ <= nums[i] <= 10⁹` |

---

## Hints

1. 💡 **Brute Force**: Compare every pair of elements - O(n²) time.
2. 💡 **Sorting**: Sort the array first, then check adjacent elements - O(n log n) time.
3. 💡 **Hash Set**: Use a set to track seen elements - O(n) time, O(n) space.

---

## Approaches

### 1. Brute Force
```
for i = 0 to n-1:
    for j = i+1 to n-1:
        if nums[i] == nums[j]: return true
return false
```
| Time | Space |
|------|-------|
| O(n²) | O(1) |

### 2. Sorting
```
sort(nums)
for i = 0 to n-2:
    if nums[i] == nums[i+1]: return true
return false
```
| Time | Space |
|------|-------|
| O(n log n) | O(1) or O(n)* |

*Depends on sorting algorithm

### 3. Hash Set (Optimal)
```
seen = new Set()
for num in nums:
    if num in seen: return true
    seen.add(num)
return false
```
| Time | Space |
|------|-------|
| O(n) | O(n) |

---

## Edge Cases to Consider

- ✅ Single element array (always `false`)
- ✅ Two identical elements (minimum `true` case)
- ✅ Duplicate at the very end of a long array
- ✅ All elements are the same
- ✅ Negative numbers
- ✅ Mix of positive and negative numbers

---

## Related Topics
`Array` | `Hash Table` | `Sorting`

## Difficulty
🟢 **Easy**

## NeetCode Category
**Arrays & Hashing** - Problem 1 of 9