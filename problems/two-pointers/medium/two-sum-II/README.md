# Two sum II - input array is sorted

| #   | Difficulty | Tag(s)       | Link                                                                            |
| --- | ---------- | ------------ | ------------------------------------------------------------------------------- |
| 25  | Medium     | Two pointers | [View problem](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |

## Approaches

- two pointers
- hash map

### Two pointers

- we can take advantage of the fact that the array is sorted
- use pointer i to track numbers on the left side of the array (the smallest numbers)
- use pointer j to track numbers on the right side of the array (the largest numbers)
- if the sum of number at i and number at j is greater than the target, it means that the number at j is too big
  - we have to decrement j so that it points to a smaller number
- if num i + num j is less than the target, it means that num i is too small
  - we have to increment i so that it points to a larger number
- O(n) time complexity
- O(1) space complexity

### Using a hash map

- this approach will work even if the input array is not sorted
- check if a difference is one of the numbers in the array
- if it is, then we have found the two numbers because x + y = target, or x = target - y
- O(n) time complexity
- O(n) space complexity
