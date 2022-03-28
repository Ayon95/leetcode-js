# Permutation in string

| #   | Difficulty | Tag(s)                   | Link                                                                 |
| --- | ---------- | ------------------------ | -------------------------------------------------------------------- |
| 21  | Medium     | Sliding window, hash map | [View problem](https://leetcode.com/problems/permutation-in-string/) |

## Sliding window

This problem is very similar to [this one](https://github.com/Ayon95/leetcode-js/tree/master/problems/sliding-window/medium/find-all-anagrams-in-a-string).

- we have to check if string 2 contains a substring which is a permutation of string 1
- a substring will be a permutation of string 1 if
  - it contains all the letters of string 1 in the right amount
- O(n) time complexity
- O(26) ~ O(1) space complexity
  - since there are 26 English letters, the frequency map can contain at most 26 key-value pairs
