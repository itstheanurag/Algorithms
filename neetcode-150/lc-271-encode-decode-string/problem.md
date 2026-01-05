# 271. Encode and Decode Strings

**Difficulty:** Medium  
**Category:** String  
**Tags:** String Manipulation, Design

## Problem Description

Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Implement the `Codec` class:
- `encode(strs)`: Encodes a list of strings to a single string.
- `decode(s)`: Decodes a single string to a list of strings.

The encoding/decoding algorithm should work such that:
```
strs == decode(encode(strs))
```

---

## Examples

### Example 1

**Input:**
```
strs = ["Hello", "World"]
```

**Output:**
```
["Hello", "World"]
```

**Explanation:**
```
Machine 1 (sender):
  Codec encoder = new Codec();
  String msg = encoder.encode(strs);  // Encodes to a single string

Machine 1 ---msg---> Machine 2

Machine 2 (receiver):
  Codec decoder = new Codec();
  String[] strs = decoder.decode(msg);  // Decodes back to original
```

### Example 2

**Input:**
```
strs = [""]
```

**Output:**
```
[""]
```

**Explanation:** An empty string should be encoded and decoded correctly.

### Example 3

**Input:**
```
strs = ["we", "say", ":", "yes"]
```

**Output:**
```
["we", "say", ":", "yes"]
```

**Explanation:** Special characters like `:` should be handled correctly.

### Example 4

**Input:**
```
strs = []
```

**Output:**
```
[]
```

**Explanation:** An empty array should return an empty array.

### Example 5 (Edge Case)

**Input:**
```
strs = ["4#code", "10#tricky"]
```

**Output:**
```
["4#code", "10#tricky"]
```

**Explanation:** Strings containing the delimiter pattern (like `#`) or numbers should still be encoded/decoded correctly.

---

## Constraints

- `0 <= strs.length < 100`
- `0 <= strs[i].length < 200`
- `strs[i]` contains any possible characters out of 256 valid ASCII characters.

---

## Expected Complexity

- **Time Complexity:** `O(m)` for each `encode()` and `decode()` call
- **Space Complexity:** `O(m + n)`

Where:
- `m` = sum of lengths of all strings
- `n` = number of strings

---

## Follow Up

Could you write a generalized algorithm to work on any possible set of characters?

---

## Hints

<details>
<summary>Hint 1</summary>

A naive solution would be to use a non-ASCII character as a delimiter. Can you think of a better way that works with all 256 ASCII characters?
</details>

<details>
<summary>Hint 2</summary>

Try to encode and decode the strings using a smart approach based on the **lengths** of each string. How can you differentiate between the lengths and any numbers that might be present in the strings?
</details>

<details>
<summary>Hint 3</summary>

We can use an encoding format: `<length>#<string>` where:
- `<length>` is the number of characters in the string
- `#` is a separator character
- `<string>` is the actual string content

**Encoding:** For each string, prepend its length followed by `#`.
- `["Hello", "World"]` → `"5#Hello5#World"`

**Decoding:** Read the number until you reach `#`, then read exactly that many characters as the string.
</details>

---

## Approach

### Length-Prefix Encoding

The key insight is to use **length-prefixed encoding**:

1. **Encode:** For each string, store its length followed by a delimiter (`#`), then the string itself.
   ```
   ["Hello", "World"] → "5#Hello5#World"
   ```

2. **Decode:** Parse the length, skip the delimiter, then read exactly that many characters.

This approach works because:
- We always know exactly how many characters to read
- The delimiter inside strings doesn't matter since we read by character count
- Works with any ASCII character including `#` and digits
