# Reverse prefix of word

| #   | Difficulty | Tag(s)       | Link                                                                  |
| --- | ---------- | ------------ | --------------------------------------------------------------------- |
| 11  | Easy       | Two pointers | [View problem](https://leetcode.com/problems/reverse-prefix-of-word/) |

## Two pointers (first approach)

- find the index of the first occurrence of the given character
- swap letters starting from the beginning of the word and the index of the first occurrence
- O(n) time complexity
- O(n) space complexity

## Two pointers (second approach)

- find the index of the first occurrence of the given character
- gradually build the reversed string by appending a character to the reversed string
- O(n) time complexity
  - still better than first approach because this requires two fewer loops
  - this approach doesn't involve creating an array from the string and then joining the array to form the output string
- O(n) space complexity
