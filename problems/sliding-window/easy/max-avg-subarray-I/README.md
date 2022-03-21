# Maximum average subarray I

| #   | Difficulty | Tag(s)         | Link                                                                      |
| --- | ---------- | -------------- | ------------------------------------------------------------------------- |
| 12  | Easy       | Sliding window | [View problem](https://leetcode.com/problems/maximum-average-subarray-i/) |

## Sliding window

This problem can be solved by using the sliding window technique because it asks for a maximum value that is calculated from a contiguous set of items (a subarray). We can use the fixed-window variation since the size of a subarray is given.

- use a variable to keep track of the max average
  - initially, its value will be -Infinity
- use a variable to keep track of the current sum
  - initially current sum will be 0
- as you loop through the array, add the current number to current sum
- when k or more numbers have been reached
  - calculate the average of that subarray and store the average
  - if the calculated average is greater than the current max average, then update current max average
  - shift the window to the right
    - subtract the first number of the current subarray from the sum
    - in the next iteration, the next number will be added to the sum
    - this way, we are shifting the subarray
- O(n) time complexity
- O(1) space complexity
