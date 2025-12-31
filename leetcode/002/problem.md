# 2. Add Two Numbers

## Problem Statement

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a **linked list**.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

![Add Two Numbers Illustration](image.png)

---

## Examples

### Example 1: Standard Addition
```
Input:  l1 = [2, 4, 3], l2 = [5, 6, 4]
Output: [7, 0, 8]

Visual:
  l1:  2 → 4 → 3  (represents 342)
  l2:  5 → 6 → 4  (represents 465)
  ─────────────────
  sum: 7 → 0 → 8  (represents 807)

Explanation: 342 + 465 = 807
```

### Example 2: Both Zero
```
Input:  l1 = [0], l2 = [0]
Output: [0]

Explanation: 0 + 0 = 0
```

### Example 3: Carry Propagation
```
Input:  l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
Output: [8, 9, 9, 9, 0, 0, 0, 1]

Visual:
  l1:  9 → 9 → 9 → 9 → 9 → 9 → 9  (represents 9999999)
  l2:  9 → 9 → 9 → 9              (represents 9999)
  ─────────────────────────────────
  sum: 8 → 9 → 9 → 9 → 0 → 0 → 0 → 1  (represents 10009998)

Explanation: 9999999 + 9999 = 10009998
```

### Example 4: Different Lengths (No Carry)
```
Input:  l1 = [1, 2, 3], l2 = [4, 5]
Output: [5, 7, 3]

Visual:
  l1:  1 → 2 → 3  (represents 321)
  l2:  4 → 5      (represents 54)
  ─────────────────
  sum: 5 → 7 → 3  (represents 375)

Explanation: 321 + 54 = 375
```

### Example 5: Carry Creates New Digit
```
Input:  l1 = [9, 9], l2 = [1]
Output: [0, 0, 1]

Visual:
  l1:  9 → 9  (represents 99)
  l2:  1      (represents 1)
  ─────────────
  sum: 0 → 0 → 1  (represents 100)

Explanation: 99 + 1 = 100
```

### Example 6: Single Digits with Carry
```
Input:  l1 = [5], l2 = [5]
Output: [0, 1]

Explanation: 5 + 5 = 10, reversed as [0, 1]
```

### Example 7: Large Numbers
```
Input:  l1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        l2 = [5, 6, 4]
Output: [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

Explanation: Very large number + 465
```

---

## Constraints

| Constraint | Range |
|------------|-------|
| Number of nodes in each list | `1 <= n <= 100` |
| Node value | `0 <= Node.val <= 9` |

> **Guarantee**: The list represents a number that does not have leading zeros.

---

## Hints

1. 💡 Keep track of the **carry** using a variable. Initialize it to 0.
2. 💡 Handle lists of **different lengths** by treating missing nodes as 0.
3. 💡 Don't forget to check for a **remaining carry** after processing all nodes.
4. 💡 Use a **dummy head** to simplify list construction.

---

## Approach

### Algorithm
1. Initialize a dummy head node and a current pointer
2. Initialize carry = 0
3. While l1 OR l2 OR carry exists:
   - Get values from l1 and l2 (use 0 if null)
   - Calculate sum = val1 + val2 + carry
   - Update carry = sum / 10
   - Create new node with value = sum % 10
   - Move pointers forward
4. Return dummy.next

### Complexity Analysis
| Metric | Value |
|--------|-------|
| **Time** | O(max(m, n)) where m, n are lengths of the two lists |
| **Space** | O(max(m, n)) for the result list |

---

## Edge Cases to Consider

- ✅ Lists of **different lengths**
- ✅ **Carry** at the end (e.g., 99 + 1 = 100)
- ✅ Both lists contain only **zeros**
- ✅ One list is significantly **longer** than the other
- ✅ All **9s** in both lists (maximum carry propagation)

---

## Related Topics
`Linked List` | `Math` | `Recursion`

## Difficulty
🟡 **Medium**