# 347. Top K Frequent Elements

## Problem Statement

Given an integer array `nums` and an integer `k`, return the `k` **most frequent** elements. You may return the answer in **any order**.

---

## Examples

### Example 1: Basic Case

```
Input:  nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]

Explanation:
  - 1 appears 3 times
  - 2 appears 2 times
  - 3 appears 1 time
  Top 2 frequent: [1, 2]
```

### Example 2: Single Element

```
Input:  nums = [1], k = 1
Output: [1]

Explanation: Only one element, return it.
```

### Example 3: All Same Frequency

```
Input:  nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2], k = 2
Output: [1, 2]

Explanation:
  - 1 appears 4 times
  - 2 appears 4 times
  - 3 appears 2 times
```

### Example 4: Negative Numbers

```
Input:  nums = [-1, -1, -2, -3, -3, -3], k = 2
Output: [-3, -1]

Explanation:
  - -3 appears 3 times
  - -1 appears 2 times
  - -2 appears 1 time
```

### Example 5: Return All Elements

```
Input:  nums = [1, 2, 3], k = 3
Output: [1, 2, 3]

Explanation: All elements have the same frequency (1), return all.
```

### Example 6: Large K Value

```
Input:  nums = [5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1], k = 3
Output: [5, 4, 3]

Explanation:
  - 5 appears 4 times
  - 4 appears 3 times
  - 3 appears 2 times
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| `nums.length` | `1 <= nums.length <= 10⁵` |
| `nums[i]` | `-10⁴ <= nums[i] <= 10⁴` |
| `k` | `1 <= k <= number of unique elements` |

> **Note**: It is guaranteed that the answer is unique.

---

## Hints

1. 💡 **Frequency Count**: First, count the frequency of each element using a hash map.
2. 💡 **Sorting**: Sort elements by frequency - O(n log n).
3. 💡 **Heap**: Use a min-heap of size k to track top k elements - O(n log k).
4. 💡 **Bucket Sort**: Use buckets indexed by frequency - O(n).

---

## Approaches

### 1. Sorting by Frequency

```
count = frequency map of nums
return sort elements by count, take first k
```

| Time | Space |
|------|-------|
| O(n log n) | O(n) |

### 2. Min-Heap (Priority Queue)

```
count = frequency map of nums
heap = min-heap of size k (by frequency)
for (num, freq) in count:
    heap.push((freq, num))
    if heap.size > k: heap.pop()
return elements in heap
```

| Time | Space |
|------|-------|
| O(n log k) | O(n + k) |

### 3. Bucket Sort (Optimal)

```
count = frequency map of nums
buckets = array of n+1 empty lists  // index = frequency
for (num, freq) in count:
    buckets[freq].append(num)
result = []
for i = n down to 1:
    result.extend(buckets[i])
    if len(result) >= k: break
return result[:k]
```

| Time | Space |
|------|-------|
| O(n) | O(n) |

---

## Edge Cases to Consider

- ✅ Single element array
- ✅ All elements have the same frequency
- ✅ k equals the number of unique elements
- ✅ Negative numbers
- ✅ Elements with tied frequencies

---

## Follow-up

> **Your algorithm's time complexity must be better than O(n log n), where n is the array's size.**

Use **Bucket Sort** approach for O(n) time complexity, or **Heap** approach for O(n log k).

---

## Related Topics

`Array` | `Hash Table` | `Divide and Conquer` | `Sorting` | `Heap (Priority Queue)` | `Bucket Sort` | `Counting` | `Quickselect`

## Difficulty

🟡 **Medium**

## NeetCode Category

**Arrays & Hashing** - Problem 4 of 9