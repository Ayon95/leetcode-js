| #   | Difficulty | Tag(s)         | Link                                                                                                                         |
| --- | ---------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 15  | Easy       | Sliding window | [View problem](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) |

## Sliding window

- since a size is given, a fixed window can be used
- use variables to keep track of the count and the current sum
- loop through the input array and in each iteration
  - add the current number to current sum
  - if at least k numbers have been reached
    - calculate the average and increment count if the average is greater than or equal to the threshold
    - shift the window to the right by subtracting the first number of the current window from current sum
- O(n) time complexity
- O(1) space complexity
