# 49. Group Anagrams

## Problem Statement

Given an array of strings `strs`, group the **anagrams** together. You can return the answer in **any order**.

> **Anagram**: A word or phrase formed by rearranging the letters of another, using all the original letters exactly once.

---

## Examples

### Example 1: Multiple Groups

```
Input:  strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

Explanation:
  - "bat" has no anagrams in the list
  - "nat" and "tan" are anagrams of each other
  - "ate", "eat", and "tea" are all anagrams of each other
```

### Example 2: Empty String

```
Input:  strs = [""]
Output: [[""]]

Explanation: An empty string is only an anagram of itself.
```

### Example 3: Single Character

```
Input:  strs = ["a"]
Output: [["a"]]

Explanation: Single element, single group.
```

### Example 4: All Same Anagrams

```
Input:  strs = ["abc", "bca", "cab", "cba", "acb", "bac"]
Output: [["abc", "bca", "cab", "cba", "acb", "bac"]]

Explanation: All strings are anagrams of each other.
```

### Example 5: No Anagrams

```
Input:  strs = ["a", "b", "c", "d"]
Output: [["a"], ["b"], ["c"], ["d"]]

Explanation: Each string is unique - no grouping possible.
```

### Example 6: Mixed Lengths

```
Input:  strs = ["ab", "a", "abc", "ba", "cba"]
Output: [["a"], ["ab", "ba"], ["abc", "cba"]]

Explanation: Strings of different lengths cannot be anagrams.
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| `strs.length` | `1 <= strs.length <= 10⁴` |
| `strs[i].length` | `0 <= strs[i].length <= 100` |
| Characters | Lowercase English letters (`a-z`) |

---

## Hints

1. 💡 **Key Insight**: All anagrams, when sorted, produce the same string.
2. 💡 **Hash Map**: Use sorted string as key, group strings with same sorted form.
3. 💡 **Character Count**: Alternatively, use character frequency as the key (avoids sorting).

---

## Approaches

### 1. Sorted String as Key

```
map = {}
for str in strs:
    key = sort(str)
    map[key].append(str)
return map.values()
```

| Time | Space |
|------|-------|
| O(n × k log k) | O(n × k) |

Where `n` = number of strings, `k` = max string length

### 2. Character Count as Key

```
map = {}
for str in strs:
    count = [0] * 26
    for char in str: count[char - 'a']++
    key = tuple(count)  # or join as string
    map[key].append(str)
return map.values()
```

| Time | Space |
|------|-------|
| O(n × k) | O(n × k) |

---

## Edge Cases to Consider

- ✅ Empty string `[""]`
- ✅ Single character strings
- ✅ All identical strings
- ✅ No anagrams exist (all unique)
- ✅ Strings of different lengths (can't be anagrams)
- ✅ Large number of strings

---

## Follow-up

> **What if the strings contain Unicode characters?**

For Unicode:
- Sorting approach still works
- Character count approach needs a hash map instead of fixed array

---

## Related Topics

`Array` | `Hash Table` | `String` | `Sorting`

## Difficulty

🟡 **Medium**

## NeetCode Category

**Arrays & Hashing** - Problem 3 of 9