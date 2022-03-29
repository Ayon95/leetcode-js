# Subarray product less than k

| #   | Difficulty | Tag(s)         | Link                                                                        |
| --- | ---------- | -------------- | --------------------------------------------------------------------------- |
| 21  | Medium     | Sliding window | [View problem](https://leetcode.com/problems/subarray-product-less-than-k/) |

## Approaches

- Brute force
- Sliding window

### Brute force

- starting at each number of the array, analyze each subarray ending at the last number of the array
- calculate the product for each subarray and check if it is less than k
- if the product for a subarray is not less than k, then we can break out of the inner loop and move on to the next number in the array
- O(n^2) time complexity
- O(1) space complexity

### Sliding window

- we have to use a dynamically-resizing window since no fixed size is given for a valid subarray
- keep expanding the window until the product of the numbers in the window becomes greater than or equal to k
- then keep shrinking the window until the product becomes less than k again
- if k is 0, then there won't be any valid subarray
- O(n) time complexity
- O(1) space complexity

#### How many valid subarrays are there in a window?

To calculate the number of valid subarrays in a window, it is important to realize two things:

- if the product of numbers in a window is less than k, then the product of numbers in all shorter subarrays ending with the last number in the window will also be less than k
- the total number of valid subarrays in a window is `endIndex - startIndex + 1`
  - `endIndex - startIndex` gives the number of subarrays other than the subarray formed by the end number itself
  - 1 is added to account for the subarray formed by the end number
  - so the number of subarrays is equal to the size of the window

```js
/*
- let's consider this array -> [1, 2, 3, 4], and k = 15
- window [1], startIndex = 0, endIndex = 0
    - the only valid subarray is formed by the number itself, [1]
    - count = 0 - 0 + 1 = 1
- window [1, 2], startIndex = 0, endIndex = 1
    - there are 2 valid subarrays ending with 2 - [2] and [1, 2]
    - count = 1 - 0 + 1 = 2
- window [1, 2, 3], startIndex = 0, endIndex = 2
    - there are 3 valid subarrays ending with 3 - [3], [2, 3], [1, 2, 3]
    - count = 2 - 0 + 1 = 3
- window [1, 2, 3, 4], startIndex = 0, endIndex = 3
    - product of this window is 24 which is not less than 15
    - so we have to shrink the window
- window [2, 3, 4], startIndex = 1, endIndex = 3
    - product is still not less than 15, so shrink the window again
- window [3, 4], startIndex = 2, endIndex = 3
    - there are 2 valid subarrays ending with 4 - [4] and [3, 4]
    - count = 3 - 2 + 1 = 2
- total number of valid subarrays = 1 + 2 + 3 + 2 = 8
*/
```
