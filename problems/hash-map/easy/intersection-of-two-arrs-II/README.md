# Intersection of two arrays II

| #   | Difficulty | Tag(s)                                | Link                                                                         |
| --- | ---------- | ------------------------------------- | ---------------------------------------------------------------------------- |
| 42  | easy       | Hash map, two pointers, binary search | [View problem](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |

The problem is very similar to [Intersection of two arrays](https://github.com/Ayon95/leetcode-js/tree/master/problems/hash-map/easy/intersection-of-two-arrs)

## Using a hash map

- use a hash map to store the count of each number in `nums1` array
- loop through `nums2`, and if the number is found in the hash map and its count is greater than 0
  - add the number to the `result` array
  - decrement the count of that number in the hash map
- O(m + n) time complexity
- O(k + l) space complexity
  - k is the size of the hash map
  - l is the size of the `result` array

## Using two pointers

- O(mlogm + nlogn + p) time complexity
  - p is the size of the larger array
- O(l) space complexity

## Binary search

- O(mlogm + nlogn + mlogn) time complexity
  - mlogn is the time required to do binary search on `nums2` array m times where m is the size of `nums1` array
- O(l) space complexity
