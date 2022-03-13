# Reverse string

| #   | Difficulty | Tag(s)       | Link                                                          |
| --- | ---------- | ------------ | ------------------------------------------------------------- |
| 3   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/reverse-string/) |

## Two-pointer approach

- Use two pointers to swap characters from two ends of the array
- The pointers start from the two ends and gradually come to the middle
- At the end of each iteration, increment left pointer and decrement right pointer
- Keep running the loop as long as left is less than right
- O(n/2) ~ O(n) time complexity
- O(1) space complexity
