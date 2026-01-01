# 242. Valid Anagram

## Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

> **Anagram**: A word or phrase formed by rearranging the letters of another, using all the original letters exactly once.

---

## Examples

### Example 1: Valid Anagram

```
Input:  s = "anagram", t = "nagaram"
Output: true

Explanation: 
  s: a(3), n(1), g(1), r(1), m(1)
  t: n(1), a(3), g(1), r(1), m(1)
  Both have the same character frequencies.
```

### Example 2: Not an Anagram

```
Input:  s = "rat", t = "car"
Output: false

Explanation: 
  s contains 'r', 'a', 't'
  t contains 'c', 'a', 'r'
  Different characters: 't' vs 'c'
```

### Example 3: Single Character - Same

```
Input:  s = "a", t = "a"
Output: true

Explanation: Both strings are identical single characters.
```

### Example 4: Single Character - Different

```
Input:  s = "a", t = "b"
Output: false

Explanation: Different characters.
```

### Example 5: Different Lengths

```
Input:  s = "ab", t = "abc"
Output: false

Explanation: Different lengths mean they can't be anagrams.
```

### Example 6: Same Letters, Different Frequencies

```
Input:  s = "aacc", t = "ccac"
Output: false

Explanation:
  s: a(2), c(2)
  t: a(1), c(3)
  Same letters but different counts.
```

### Example 7: Empty Strings

```
Input:  s = "", t = ""
Output: true

Explanation: Two empty strings are anagrams of each other.
```

### Example 8: Repeated Characters

```
Input:  s = "aabbcc", t = "abcabc"
Output: true

Explanation: Both contain a(2), b(2), c(2).
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| `s.length`, `t.length` | `1 <= length <= 5 × 10⁴` |
| Characters | Lowercase English letters (`a-z`) |

---

## Hints

1. 💡 **Quick Check**: If lengths differ, return `false` immediately.
2. 💡 **Sorting**: Sort both strings and compare - if equal, they're anagrams.
3. 💡 **Hash Map**: Count character frequencies in both strings and compare.
4. 💡 **Array**: Use a fixed-size array of 26 for lowercase letters (more efficient than hash map).

---

## Approaches

### 1. Sorting

```
if len(s) != len(t): return false
return sort(s) == sort(t)
```

| Time | Space |
|------|-------|
| O(n log n) | O(n) for sorted copies |

### 2. Hash Map / Frequency Count

```
if len(s) != len(t): return false
count = {}
for char in s: count[char]++
for char in t: count[char]--
return all values in count are 0
```

| Time | Space |
|------|-------|
| O(n) | O(k) where k = unique characters |

### 3. Array Counter (Optimal for lowercase letters)

```
if len(s) != len(t): return false
count = array of 26 zeros
for i = 0 to n-1:
    count[s[i] - 'a']++
    count[t[i] - 'a']--
return all values in count are 0
```

| Time | Space |
|------|-------|
| O(n) | O(1) - fixed 26 elements |

---

## Edge Cases to Consider

- ✅ Different string lengths (quick `false`)
- ✅ Empty strings
- ✅ Single character strings
- ✅ Same letters, different frequencies
- ✅ Strings with all same characters
- ✅ Very long strings (performance)

---

## Follow-up

> **What if the inputs contain Unicode characters? How would you adapt your solution?**

For Unicode characters:

- Use a **Hash Map** instead of a fixed-size array
- The hash map can handle any Unicode code point as a key
- Time complexity remains O(n), space becomes O(k) where k is the number of unique characters

---

## Related Topics

`Hash Table` | `String` | `Sorting`

## Difficulty

🟢 **Easy**

## NeetCode Category

**Arrays & Hashing** - Problem 2 of 9
