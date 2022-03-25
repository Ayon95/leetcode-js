# Longest substring without repeating characters

| #   | Difficulty | Tag(s)                   | Link                                                                                          |
| --- | ---------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| 18  | Medium     | Sliding window, hash map | [View problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |

## Sliding window

- we have to use a flexible sliding window since no fixed size is given
- the window will grow until it contains a duplicate, then it will shrink until it has no duplicate
- a hash map is used to track the count of each character in the window
- two variables are used to track the max length and the current length of the window
- a pointer is used to track the starting point of the window
- another pointer i is used to loop through the string
- in each iteration, determine the count of the current character and increment window length
- if the count of the current character in the iteration is more than 1, then that means the window has encountered a duplicate
  - shrink the window
    - adjust count of the first character in the window
    - increment 'start' pointer
    - decrement window length
- the substring without any duplicates is the one that is included in the window after shrinking it
- after making sure the window has no duplicate, compare the window length with the current max length
- O(n) time complexity
- O(n) space complexity
  - when all the characters of the input string are unique
