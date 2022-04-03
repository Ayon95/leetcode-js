# Rotate array

| #   | Difficulty | Tag(s)       | Link                                                        |
| --- | ---------- | ------------ | ----------------------------------------------------------- |
| 28  | Medium     | Two pointers | [View problem](https://leetcode.com/problems/rotate-array/) |

## Two pointers (reversing the entire array and then individual portions)

- the array can be divided into two portions
  - the last k elements
  - all the elements before the kth last element
- in the final rotated array, the portion containing the last k elements are at the beginning and the other portion are at the end
- so, if we reverse the input array, the positions of these portions will be switched
- then we have to reverse the individual portions so that the order of numbers within them gets restored
  - reverse the first k elements and the remaining elements
- O(2n) ~ O(n) time complexity
- O(1) space complexity

```js
/*
- input array = [1, 2, 3, 4, 5, 6, 7], k = 3
- the two portions are [1, 2, 3, 4] and [5, 6, 7]; their positions need to be swapped
- after reversing the input array, we get [7, 6, 5, 4, 3, 2, 1]
- now we have to reverse the individual portions to restore the order of the numbers
- after reversing [7, 6, 5], we get [5, 6, 7]
- after reversing [4, 3, 2, 1], we get [1, 2, 3, 4]
- the final rotated array is [5, 6, 7, 1, 2, 3, 4]
*/
```

Why is it necessary to set k to the remainder of dividing k by the input array's length?

- k is the number of rotations to make, and suppose n is the input array's length
- the idea is that when k exceeds n, we reset k to 0 and see how many additional rotations we have to make
- if we rotate the array n times or xn times, we end up with the exact same array
  - so, there is no need to make any rotations at all
  - this will be the case when k % n === 0
- if k is less than n, then k % n === k
- if k is greater than n, then we have to make k % n rotations

```js
/*
Example 1: k = n
- input array = [1, 2, 3, 4, 5], k = 5
- if we rotate the array 5 times, we will have [1, 2, 3, 4, 5]
- 5 % 5 = 0, so we don't have to make any rotations

Example 2: k > n and k = 3n
- input array = [1, 2, 3, 4, 5], k = 15
- if we rotate the array 15 times, we will still have [1, 2, 3, 4, 5]
- 15 % 5 = 0

Example 3: k < n
- input array = [1, 2, 3, 4, 5], k = 3
- if we rotate the array 3 times, we get [3, 4, 5, 1, 2]
- 3 % 5 = 3

Example 4: k > n and k = 1.4n
- input array = [1, 2, 3, 4, 5], k = 7
- if we rotate the array 7 times, we get [4, 5, 1, 2, 3]
- notice that this is the same as rotating the array 2 times
- 7 % 5 = 2
*/
```

### How does the modulo operator work?

- suppose x = y % z
- so, x is the remainder of dividing y by z
- the remainder will always be within 0 and z
- when y exceeds z, x will be reset to 0
