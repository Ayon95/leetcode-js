# Sort colors

| #   | Difficulty | Tag(s)                | Link                                                       |
| --- | ---------- | --------------------- | ---------------------------------------------------------- |
| 26  | Medium     | Two pointers, sorting | [View problem](https://leetcode.com/problems/sort-colors/) |

## Two pointers

- we can apply the concept of quicksort partitioning and modify it a bit using two pointers
- move all the 0's to the left and all the 2's to the right
- all the 1's will be left in the middle
- use a pointer to track the index of 0 (left)
- use another pointer to track the index of 2 (right)
- iterate through the array and check if the current number needs to be swapped
  - keep iterating as long as the iterating pointer i is less than or equal to the right pointer
  - this means that we are done sorting the array and all the numbers have been partitioned into three groups
  - all the numbers after the right pointer will be 2
- O(n) time complexity
- O(1) space complexity

Why don't we increment i when we swap number at i with the number at right?

- because the number that is swapped from the right (if it's a 0) may not be in the correct position
- this number may require additional checking so that it gets placed in the correct position
- if we increment i, then we will pass this number and therefore will not be able to check and ensure that it is in the correct place
- suppose we have to sort this array -> [1, 2, 0]
  - when i reaches 2, it will be swapped with 0 at the end
  - so now we have [1, 0, 2]
  - this 0 is not in the correct place; it needs to be swapped with 1
  - if we had incremented i when we swapped 2, we wouldn't have been able to check that 0 is in the wrong place

## Approach 2

- the array will only contain 0's, 1's, and 2's and we will have to sort them in ascending order
- get the count of 0's, and 1's
- suppose x is the count of 0's, and y is the count of 1's
- replace the first x values with 0, then the next y values with 1, and the remaining values with 2
- O(2n) ~ O(n) time complexity
- O(1) space complexity
