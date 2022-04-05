# Partition array according to given pivot

| #   | Difficulty | Tag(s)                   | Link                                                                                    |
| --- | ---------- | ------------------------ | --------------------------------------------------------------------------------------- |
| 31  | Medium     | Two pointers, simulation | [View problem](https://leetcode.com/problems/partition-array-according-to-given-pivot/) |

## Two pointers

- use a pointer (left) to track the insertion index of number less than pivot
- use another pointer (right) to track the insertion index of number greater than pivot
- loop through the input array
  - use two variables i and j to iterate from the two ends of the array
  - i will go from start to end and j will go from end to start
  - insert number less than the pivot from the start at the left index of the output array and increment left
  - insert number greater than the pivot from the end at the right index of the output array and decrement right
- populate the indices in between left and right with the pivot
- O(n) time complexity
- O(n) space complexity

## Approach 2

- create three arrays for storing numbers less than, equal to, and greater than the pivot
- reverse the arrays containing numbers that are not equal to the pivot
- then us each of those numbers to replace each number in the input array
- O(3n) ~ O(n) time complexity
- O(n) space complexity
