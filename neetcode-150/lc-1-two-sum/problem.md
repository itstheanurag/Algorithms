# 1. Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

---

## Examples

### Example 1: Basic Case
```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9, so we return [0, 1].
```

### Example 2: Middle Elements
```
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
Explanation: nums[1] + nums[2] = 2 + 4 = 6.
```

### Example 3: Same Values
```
Input: nums = [3, 3], target = 6
Output: [0, 1]
Explanation: Both elements are 3, and 3 + 3 = 6.
```

### Example 4: Negative Numbers
```
Input: nums = [-1, -2, -3, -4, -5], target = -8
Output: [2, 4]
Explanation: nums[2] + nums[4] = -3 + (-5) = -8.
```

### Example 5: Mixed Positive and Negative
```
Input: nums = [-3, 4, 3, 90], target = 0
Output: [0, 2]
Explanation: nums[0] + nums[2] = -3 + 3 = 0.
```

### Example 6: Large Array
```
Input: nums = [1, 5, 8, 2, 9, 3, 7, 4], target = 11
Output: [1, 3] or [2, 5] or [4, 1] (any valid pair)
Explanation: Multiple valid answers exist - 5 + 2 = 7? Wait, 8 + 3 = 11, so [2, 5].
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| `nums.length` | `2 <= nums.length <= 10⁴` |
| `nums[i]` | `-10⁹ <= nums[i] <= 10⁹` |
| `target` | `-10⁹ <= target <= 10⁹` |

> **Note**: Only one valid answer exists.

---

## Hints

1. 💡 **Brute Force**: Try every pair of numbers - O(n²) time complexity.
2. 💡 **Optimization**: Use a hash map to store numbers you've seen. For each number, check if `target - num` exists in the map.
3. 💡 **One-Pass Solution**: You can do this in a single pass through the array.

---

## Follow-up

Can you come up with an algorithm that is **less than O(n²)** time complexity?

> **Hint**: A hash map solution achieves **O(n)** time complexity with O(n) space.

---

## Approach

### 1. Brute Force
- Time: O(n²)
- Space: O(1)
- Check every pair of elements

### 2. Hash Map (Optimal)
- Time: O(n)
- Space: O(n)
- Store complement in hash map as you iterate

---

## Related Topics
`Array` | `Hash Table`

## Difficulty
🟢 **Easy**