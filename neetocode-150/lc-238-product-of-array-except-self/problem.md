# 238. Product of Array Except Self

## Problem Statement

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the **product of all the elements** of `nums` **except** `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed to fit** in a 32-bit integer.

You must write an algorithm that runs in **O(n) time** and **without using the division operation**.

---

## Examples

### Example 1: Basic Case

```
Input:  nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]

Explanation:
  - answer[0] = 2 × 3 × 4 = 24
  - answer[1] = 1 × 3 × 4 = 12
  - answer[2] = 1 × 2 × 4 = 8
  - answer[3] = 1 × 2 × 3 = 6
```

### Example 2: Contains Zero

```
Input:  nums = [-1, 1, 0, -3, 3]
Output: [0, 0, 9, 0, 0]

Explanation:
  - For indices 0, 1, 3, 4: the product includes zero, so result is 0
  - For index 2: product = (-1) × 1 × (-3) × 3 = 9
```

### Example 3: Two Elements

```
Input:  nums = [2, 3]
Output: [3, 2]

Explanation:
  - answer[0] = 3 (product of all except first)
  - answer[1] = 2 (product of all except second)
```

### Example 4: Negative Numbers

```
Input:  nums = [-1, -2, -3, -4]
Output: [-24, -12, -8, -6]

Explanation:
  - Product of three negatives is negative
```

### Example 5: All Ones

```
Input:  nums = [1, 1, 1, 1]
Output: [1, 1, 1, 1]

Explanation: Product of all ones is always 1.
```

### Example 6: Two Zeros

```
Input:  nums = [0, 0, 2, 3]
Output: [0, 0, 0, 0]

Explanation: With two zeros, every position has at least one zero in its product.
```

### Example 7: Single Zero at End

```
Input:  nums = [2, 3, 4, 0]
Output: [0, 0, 0, 24]

Explanation:
  - Positions 0, 1, 2 include the zero, so result is 0
  - Position 3: 2 × 3 × 4 = 24
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| `nums.length` | `2 <= nums.length <= 10⁵` |
| `nums[i]` | `-30 <= nums[i] <= 30` |
| Product guarantee | Fits in 32-bit integer |

---

## Hints

1. 💡 **No Division**: You can't simply compute total product and divide!
2. 💡 **Prefix/Suffix**: For each position, product = (product of left elements) × (product of right elements).
3. 💡 **Two Passes**: First pass computes prefix products, second pass computes suffix products.
4. 💡 **Space Optimization**: Use the output array to store prefix products, then multiply with suffix in second pass.

---

## Approaches

### 1. Brute Force (Not Allowed - Division)

```
total = product of all nums
for i: answer[i] = total / nums[i]
```

| Time | Space |
|------|-------|
| O(n) | O(1) |

❌ **Not allowed** - uses division and fails with zeros

### 2. Two Arrays (Prefix & Suffix)

```
prefix[0] = 1
for i = 1 to n-1: prefix[i] = prefix[i-1] × nums[i-1]

suffix[n-1] = 1
for i = n-2 down to 0: suffix[i] = suffix[i+1] × nums[i+1]

answer[i] = prefix[i] × suffix[i]
```

| Time | Space |
|------|-------|
| O(n) | O(n) |

### 3. Optimized Space (Optimal)

```
answer[0] = 1
for i = 1 to n-1: answer[i] = answer[i-1] × nums[i-1]

suffix = 1
for i = n-1 down to 0:
    answer[i] = answer[i] × suffix
    suffix = suffix × nums[i]
```

| Time | Space |
|------|-------|
| O(n) | O(1)* |

*Output array doesn't count as extra space per problem definition

---

## Visual Explanation

For `nums = [1, 2, 3, 4]`:

```
Index:       0     1     2     3
nums:        1     2     3     4

Prefix:      1     1     2     6     (product of elements to the left)
Suffix:      24    12    4     1     (product of elements to the right)

Answer:      24    12    8     6     (prefix × suffix)
```

---

## Edge Cases to Consider

- ✅ Array with exactly two elements
- ✅ Array contains one zero
- ✅ Array contains multiple zeros
- ✅ All negative numbers
- ✅ Mix of positive and negative numbers
- ✅ All same numbers

---

## Follow-up

> **Can you solve the problem in O(1) extra space complexity?**  
> *(The output array does not count as extra space for space complexity analysis.)*

Yes! Use **Approach 3** - store prefix products in the answer array, then multiply with suffix product in a single variable during the second pass.

---

## Related Topics

`Array` | `Prefix Sum`

## Difficulty

🟡 **Medium**

## NeetCode Category

**Arrays & Hashing** - Problem 5 of 9