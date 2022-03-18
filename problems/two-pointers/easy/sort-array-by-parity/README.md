# Sort array by parity

| #   | Difficulty | Tag(s)       | Link                                                                |
| --- | ---------- | ------------ | ------------------------------------------------------------------- |
| 9   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/sort-array-by-parity/) |

## Two pointers

- left pointer will be used to keep track of even number insertion index
- right pointer will be used to keep track of odd number insertion index
- left pointer will start from 0
- right pointer will start from the end of the array
- create a new array for adding the numbers in the correct order
- increment left pointer every time an even number is added
- decrement right pointer every time an odd number is added
- O(n) time complexity
- O(n) space complexity

## Two pointers (in-place)

- a swap is performed only when an even number and an odd number are not in the correct place
  - if the number at left is odd
  - AND if the number at right is even
- if the number at left is even, then it is already in the right place
  - increment left pointer so that we can examine the number in the next position
- if the number at right is odd, then it is already in the right place
  - decrement right pointer so that we can examine the number in the next position from the back
- the loop will keep running as long as left is less than right
- O(n) time complexity
- O(1) space complexity
