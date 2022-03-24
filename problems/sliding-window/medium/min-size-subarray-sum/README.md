# Minimum size subarray sum

| #   | Difficulty | Tag(s)         | Link                                                                     |
| --- | ---------- | -------------- | ------------------------------------------------------------------------ |
| 17  | Medium     | Sliding window | [View problem](https://leetcode.com/problems/minimum-size-subarray-sum/) |

## Sliding window

- since no fixed size is given, we will have to use a flexible (dynamically resizing) window
- the window will grow until its sum is at least equal to the target
- then the window will shrink until its sum becomes less than the target
- use variables to track the start of the window and the current sum

### Complexity analysis

- O(n) time complexity
  - even if there is a nested while loop, time complexity is not O(n^2)
  - the inner loop won't run n times for each iteration of the outer loop
  - that is, the inner loop does not depend on the outer loop
  - the 'start' pointer does not get reset, and it moves along with the outer loop pointer i
  - the inner loop will iterate at most n times in total which results in O(2n) ~ O(n) time complexity
  - that is, at most two passes are made through the input array
  - even the loops have a nested structure, they run in parallel
- O(1) space complexity
