# Partition labels

| #   | Difficulty | Tag(s)                 | Link                                                            |
| --- | ---------- | ---------------------- | --------------------------------------------------------------- |
| 29  | Medium     | Two pointers, hash map | [View problem](https://leetcode.com/problems/partition-labels/) |

## Two pointers

- we need to know two things to determine where a valid partition ends
  - among the letters we have seen so far, which letter's last occurrence is the farthest away from the current start position?
  - what is the index of that letter's last occurrence?
  - this is the index at which we can form a valid partition
  - we can be sure that all the letters from start until this index are not present in the rest of the string
- use a pointer to track the start of a partition (valid substring)
- use another pointer i to iterate through the string
- use a hash map to store the index of the last occurrence of each type of letter
- use a variable to track the farthest last occurrence index
- once we have found a valid partition
  - we change the start pointer to point to the letter that is at index i + 1
  - we also reset farthestLastOccurrenceIndex to 0
- O(2n) ~ O(n) time complexity
- O(26) ~ O(1) space complexity
