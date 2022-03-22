# Substrings of size three with distinct characters

| #   | Difficulty | Tag(s)                   | Link                                                                                             |
| --- | ---------- | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 13  | Easy       | Sliding window, hash map | [View problem](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/) |

## Approaches

- sliding window
- brute force
- simple (comparing three adjacent letters)

### Sliding window

- create a hash map for keeping track of frequency of substring letters
- use a variable to keep track of the number of unique letters
- when three or more letters have been reached
  - if the size of the set is 3, then that means we have found a good substring
  - shift the window to the right
    - if the first letter of the current substring occurred more than once, then decrement the letter's frequency
    - else, remove the letter from the frequency hash map and decrement unique-letter count
- O(n) time complexity
- O(n) space complexity

### Brute force

- iterate through the string from start up to the 3rd last letter
- in each iteration of the outer loop, iterate through the string from i to i + 2
  - add each letter to a unique-characters set
- if the size of the set is 3, then that means we have found a good substring
- O(n^2) time complexity
- O(n) space complexity

### Simple approach (based on substring size of 3)

- compare three adjacent characters in each iteration
- this solution is efficient but the code is specific to size 3 of the substring
- not good for solving the generalized version of this question (substring of size k)
- O(n) time complexity
- O(1) space complexity
