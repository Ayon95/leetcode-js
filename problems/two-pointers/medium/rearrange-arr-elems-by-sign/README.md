# Rearrange array elements by sign

| #   | Difficulty | Tag(s)                 | Link                                                                            |
| --- | ---------- | ---------------------- | ------------------------------------------------------------------------------- |
| 33  | Medium     | Two pointers, hash map | [View problem](https://leetcode.com/problems/rearrange-array-elements-by-sign/) |

## Two pointers (two pass, using a hash map)

- the positive numbers will be at even index positions starting from index 0
- the negative numbers will be at odd index positions starting from 1
- use two variables to track the indices of positive and negative numbers
  - evenIndex = 0, oddIndex = 1
- use a hash map to store at which index each number should go
- whenever we encounter a positive number, we increase evenIndex by 2
- whenever we encounter a negative number, we increase oddIndex by 2
- finally use the hash map to replace the numbers in input array with the correct numbers
- O(2n) ~ O(n) time complexity
- O(n) space complexity

## Two pointers (one pass, and without using a hash map)

- create a new array for putting the numbers in the correct position
- as we iterate through the input array
  - if we encounter a positive number, we insert it in result array at evenIndex position, and add 2 to evenIndex
  - if we encounter a negative number, we insert it in result array at oddIndex position, and add 2 to oddIndex
- O(n) time complexity
- O(n) space complexity
