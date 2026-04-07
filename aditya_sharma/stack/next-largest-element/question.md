## Problem: Next Greater Element (NGE)

Given an array of integers, replace each element with the **next greater element to its right**.  
If no such element exists, replace it with `-1`.

---

### Input
An array of integers `arr`

### Output
An array where each element is replaced by the next greater element on its right

---

### Example

Input:
[1, 3, 2, 4]

Output:
[3, 4, 4, -1]

---

###  Explanation

- 1 → next greater is 3  
- 3 → next greater is 4  
- 2 → next greater is 4  
- 4 → no greater element → -1  

---

### Constraints

- 1 ≤ n ≤ 10^5  
- -10^9 ≤ arr[i] ≤ 10^9  

---

###  Follow-up

Can you solve this in **O(n)** time using a stack?