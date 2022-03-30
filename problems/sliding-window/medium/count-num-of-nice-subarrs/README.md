# Count number of nice subarrays

| #   | Difficulty | Tag(s)         | Link                                                                          |
| --- | ---------- | -------------- | ----------------------------------------------------------------------------- |
| 23  | Medium     | Sliding window | [View problem](https://leetcode.com/problems/count-number-of-nice-subarrays/) |

## Sliding window (approach 1)

- we will have to use a dynamically-resizing window since no fixed subarray size is given
- keep growing the window until it has more than k odd numbers
- then shrink the window until it has exactly k odd numbers
  - we have to shrink the window when it will have k + 1 odd numbers, so that we can remove that extra odd number
- store the indices of odd numbers in an array
  - this is needed to track the index of the first odd number in the current window
- use a variable to track the index of oddNumIndices array
  - when this variable is 0, the first odd number in the current window is the very first odd number in the input array
  - when this variable becomes 1, the first odd number in the current window is the second odd number in the input array
  - when we shrink the window, if we leave behind the first odd number in the current window, then the first odd number in the next window will be the next odd number in the array
- O(n) time complexity
- O(n) worst-case space complexity
  - if all the numbers in the input array are odd

How many valid subarrays are there in a window?

- we know that a window will contain exactly k odd numbers
- one valid subarray is formed from firstOddNumIndex to endIndex
- the window can also have even numbers before the first odd number
- a valid subarray can be formed from each of those even numbers to endIndex
- firstOddNumIndex - startIndex will give the count of even numbers
- the number of valid subarrays is equal to firstOddNumIndex - startIndex + 1

## Sliding window (approach 2)

- when we encounter a window having k odd numbers, we will have one valid subarray between the first odd number and last odd number in the window
- we will also have a valid subarray for each even number that comes before the first odd number
- also, for every even number that comes after the last odd number, the number of valid subarrays will double
- keep growing the window until it has k odd numbers
- then shrink the window until it no longer has k odd numbers
  - every time we shrink the window, we increment count of valid subarrays
  - if the window leaves behind an odd number, we decrement the count of odd numbers
- once we find the count of valid subarrays, we add it to the total count of valid subarrays for every even number that comes after the last odd number
- then when we encounter the next odd number, we reset the count of valid subarrays
  - this is because the first and last odd numbers will have changed for the current window
  - window will again have k odd numbers and we will count the valid subarrays for that window by shrinking it
- O(n) time complexity
- O(1) space complexity
