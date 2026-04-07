## Problem: Nearest Greater Element to Left (NGL)

Given an array of integers, replace each element with the **nearest greater element to its left**.  
If no such element exists, replace it with `-1`.

---

### Input
An array of integers `arr`

### Output
An array where each element is replaced by the nearest greater element on its left

---

### Example

Input:
[1, 3, 2, 4]

Output:
[-1, -1, 3, -1]

---

### Explanation

- 1 → no element on left → -1  
- 3 → no greater element on left → -1  
- 2 → nearest greater on left is 3  
- 4 → no greater element on left → -1  

---

### Constraints

- 1 ≤ n ≤ 10^5  
- -10^9 ≤ arr[i] ≤ 10^9  

---

### Follow-up

Can you solve this in **O(n)** time using a stack?

---

### Hint

Use a **monotonic decreasing stack**:
- Traverse from left to right
- Pop elements smaller than or equal to current
- Top of stack will be your answer