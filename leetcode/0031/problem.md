# 31. Next Permutation

---

## Problem Statement

A **permutation** of an array of integers is an arrangement of its members into a sequence or linear order.

- For example, for `arr = [1,2,3]`, the following are all the permutations of `arr`: `[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]`.

The **next permutation** of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container.

If such arrangement is not possible, the array must be rearranged as the **lowest possible order** (i.e., sorted in ascending order).

- For example, the next permutation of `arr = [1,2,3]` is `[1,3,2]`.
- Similarly, the next permutation of `arr = [2,3,1]` is `[3,1,2]`.
- While the next permutation of `arr = [3,2,1]` is `[1,2,3]` because `[3,2,1]` does not have a lexicographical larger rearrangement.

Given an array of integers `nums`, find the next permutation of `nums`.

The replacement must be **in place** and use only **constant extra memory**.

---

## Examples

### Example 1: Standard Case
```
Input: nums = [1, 2, 3]
Output: [1, 3, 2]
Explanation: The next lexicographical permutation of [1, 2, 3] is [1, 3, 2].
```

### Example 2: Last Permutation
```
Input: nums = [3, 2, 1]
Output: [1, 2, 3]
Explanation: No larger permutation possible, so we return the smallest one.
```

### Example 3: Duplicate Elements
```
Input: nums = [1, 1, 5]
Output: [1, 5, 1]
Explanation: The next permutation is [1, 5, 1].
```

### Example 4: Longer Sequence
```
Input: nums = [1, 5, 8, 4, 7, 6, 5, 3, 1]
Output: [1, 5, 8, 5, 1, 3, 4, 6, 7]
```

---

## Constraints

| Constraint | Value |
|------------|-------|
| `nums.length` | `1 <= nums.length <= 100` |
| `nums[i]` | `0 <= nums[i] <= 100` |

---

## Hints

1. 💡 Find the first index `i` from the right such that `nums[i] < nums[i+1]`.
2. 💡 If no such index exists, the array is in descending order; just reverse it.
3. 💡 If it exists, find the smallest element `nums[j]` to the right of `i` that is larger than `nums[i]`.
4. 💡 Swap `nums[i]` and `nums[j]`.
5. 💡 Reverse the suffix starting from `i+1`.

---

## Approach

### Algorithm (Single Pass)
1. **Find Pivot**: Iterate from right to left to find the first element `nums[i]` that is smaller than its successor `nums[i+1]`.
2. **Find Successor**: If pivot exists, iterate from right to left to find the first element `nums[j]` that is greater than `nums[i]`.
3. **Swap**: Swap `nums[i]` and `nums[j]`.
4. **Reverse**: Reverse the suffix starting from `i+1` to make it the smallest possible lexicographical order for that prefix.

### Complexity Analysis
| Metric | Value |
|--------|-------|
| **Time** | O(n) - Single pass through the array twice |
| **Space** | O(1) - In-place modification |

---

## Related Topics
`Array` | `Two Pointers`

## Difficulty
🟡 **Medium**
