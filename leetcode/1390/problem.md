# 1390. Four Divisors

## Problem Statement

Given an integer array `nums`, return the **sum of divisors** of the integers in that array that have **exactly four divisors**. If there is no such integer in the array, return `0`.

---

## Examples

### Example 1: Standard Case

```
Input:  nums = [21, 4, 7]
Output: 32

Breakdown:
  21 → divisors: [1, 3, 7, 21] → count: 4 ✓ → sum: 32
   4 → divisors: [1, 2, 4]     → count: 3 ✗
   7 → divisors: [1, 7]        → count: 2 ✗

Explanation: Only 21 has exactly 4 divisors, so we return 1 + 3 + 7 + 21 = 32
```

### Example 2: Multiple Four-Divisor Numbers

```
Input:  nums = [21, 21]
Output: 64

Breakdown:
  21 → divisors: [1, 3, 7, 21] → sum: 32
  21 → divisors: [1, 3, 7, 21] → sum: 32

Explanation: Both elements are 21, each contributing 32. Total = 64
```

### Example 3: No Four-Divisor Numbers

```
Input:  nums = [1, 2, 3, 4, 5]
Output: 0

Breakdown:
  1 → divisors: [1]           → count: 1 ✗
  2 → divisors: [1, 2]        → count: 2 ✗ (prime)
  3 → divisors: [1, 3]        → count: 2 ✗ (prime)
  4 → divisors: [1, 2, 4]     → count: 3 ✗ (perfect square)
  5 → divisors: [1, 5]        → count: 2 ✗ (prime)

Explanation: None of the numbers have exactly 4 divisors.
```

### Example 4: Product of Two Distinct Primes

```
Input:  nums = [6, 10, 15]
Output: 60

Breakdown:
   6 → divisors: [1, 2, 3, 6]   → count: 4 ✓ → sum: 12
  10 → divisors: [1, 2, 5, 10]  → count: 4 ✓ → sum: 18
  15 → divisors: [1, 3, 5, 15]  → count: 4 ✓ → sum: 24

Explanation: All are products of two distinct primes. Total = 12 + 18 + 24 = 54

Wait, let me recalculate: 1+2+3+6=12, 1+2+5+10=18, 1+3+5+15=24 → 12+18+24 = 54
Output should be: 54
```

### Example 5: Cube of Prime

```
Input:  nums = [8, 27]
Output: 30

Breakdown:
   8 → divisors: [1, 2, 4, 8]     → count: 4 ✓ → sum: 15
  27 → divisors: [1, 3, 9, 27]    → count: 4 ✓ → sum: 40

Explanation: 8 = 2³ and 27 = 3³. Cubes of primes have exactly 4 divisors.
Total = 15 + 40 = 55
Output should be: 55
```

### Example 6: Mixed Cases

```
Input:  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Output: 45

Breakdown:
   6 → divisors: [1, 2, 3, 6]   → count: 4 ✓ → sum: 12
   8 → divisors: [1, 2, 4, 8]   → count: 4 ✓ → sum: 15
  10 → divisors: [1, 2, 5, 10]  → count: 4 ✓ → sum: 18

Total = 12 + 15 + 18 = 45
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| Array length | `1 <= nums.length <= 10⁴` |
| Element value | `1 <= nums[i] <= 10⁵` |

---

## Hints

1. 💡 A number has exactly 4 divisors in two cases:
   - It's a **cube of a prime** (p³): divisors are [1, p, p², p³]
   - It's a **product of two distinct primes** (p × q): divisors are [1, p, q, p×q]
2. 💡 Iterate through potential divisors up to **√n** to count divisors efficiently.
3. 💡 If you find more than 4 divisors, you can **early exit** the divisor counting loop.
4. 💡 Perfect squares need special handling when counting divisors.

---

## Approach

### Algorithm

1. For each number in the array:
   - Count its divisors by iterating from 1 to √n
   - Track the sum of divisors while counting
   - If exactly 4 divisors, add the sum to the result
2. Return the total sum

### Pseudocode

```
function sumFourDivisors(nums):
    totalSum = 0
    
    for each num in nums:
        divisorCount = 0
        divisorSum = 0
        
        for i from 1 to √num:
            if num % i == 0:
                divisorCount += 1
                divisorSum += i
                
                if i != num / i:  // Not a perfect square case
                    divisorCount += 1
                    divisorSum += num / i
                
                if divisorCount > 4:
                    break  // Early exit
        
        if divisorCount == 4:
            totalSum += divisorSum
    
    return totalSum
```

### Complexity Analysis

| Metric | Value |
|--------|-------|
| **Time** | O(n × √m) where n = nums.length, m = max(nums[i]) |
| **Space** | O(1) - constant extra space |

---

## Key Insights

### Numbers with Exactly 4 Divisors

| Type | Example | Divisors |
|------|---------|----------|
| Cube of prime (p³) | 8 = 2³ | [1, 2, 4, 8] |
| Product of 2 distinct primes (p × q) | 6 = 2 × 3 | [1, 2, 3, 6] |

### Numbers that DON'T have 4 divisors

- **Primes**: Only 2 divisors [1, p]
- **Perfect squares of primes** (p²): Only 3 divisors [1, p, p²]
- **Large composites**: Usually have more than 4 divisors

---

## Edge Cases to Consider

- ✅ All **prime numbers** (always return 0)
- ✅ **Single element** array
- ✅ **Duplicate** elements (each counted separately)
- ✅ Numbers that are **perfect squares**
- ✅ The number **1** (only has 1 divisor)
- ✅ Large numbers near **10⁵**

---

## Related Topics

`Array` | `Math` | `Number Theory`

## Difficulty

🟡 **Medium**
