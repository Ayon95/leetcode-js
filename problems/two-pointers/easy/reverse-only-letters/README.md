# Reverse only letters

| #   | Difficulty | Tag(s)       | Link                                                                |
| --- | ---------- | ------------ | ------------------------------------------------------------------- |
| 5   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/reverse-only-letters/) |

## Two pointers

- create an array from the input string
- use two pointers to start from the edges and move inward
- keep looping as long as left pointer is less than right pointer
- compare characters from the two edges of the string
- if both characters are English letters, then swap their places
  - increment left pointer and decrement right pointer
- if character at left pointer is not a letter, then increment left pointer
  - since it is not a letter, it needs to stay in the same place
  - go to the next character
- if character at right pointer is not a letter, then decrement left pointer
  - go to the next character since we can only swap an English letter
- O(n) time complexity
- O(n) space complexity
