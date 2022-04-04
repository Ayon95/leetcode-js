# Number of subarrays with bounded maximum

| #   | Difficulty | Tag(s)       | Link                                                                                    |
| --- | ---------- | ------------ | --------------------------------------------------------------------------------------- |
| 30  | Medium     | Two pointers | [View problem](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/) |

## Two pointers

- use a pointer to track the starting position of a valid window of numbers
- use another pointer i to iterate through the input array
- use a variable to track the length of the longest subarray ending with a number that is in range
- if the current number is in range
  - the number of valid subarrays will be i - start + 1
  - a valid subarray can be formed starting with each preceding number and ending with the current number
  - just the current number itself will also form a valid subarray
- if the current number is larger than the range
  - set start to i + 1, so that a new subarray starts from the number next to the current number
  - reset longestSubarrLength to 0
  - this is because a valid subarray cannot have this number
- if the current number is smaller than the range
  - the number of valid subarrays will be the length of the longest subarray that we have seen so far ending with a number in range
  - a valid subarray can be formed with each number in that longest subarray
- O(n) time complexity
- O(1) space complexity
