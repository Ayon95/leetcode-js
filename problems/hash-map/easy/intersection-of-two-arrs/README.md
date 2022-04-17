# Intersection of two arrays

| #   | Difficulty | Tag(s)                                         | Link                                                                      |
| --- | ---------- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| 40  | Easy       | Hash map, two pointers, sorting, binary search | [View problem](https://leetcode.com/problems/intersection-of-two-arrays/) |

## Approaches

- hash map
- two pointers
- binary search

### Hash map

- we have to find the numbers that are present in both arrays
- we can include in the result array only one occurrence of a common number
- use a hash map to store unique numbers present in arr1
- loop through arr2 and check if it contains unique numbers of arr1
  - whenever we find a match, we add that number to the result arr, and delete it from the hash map
- O(m + n) time complexity
- O(k + l) space complexity
  - k is the count of unique numbers in arr1
  - l is the size of the result array

### Two pointers

- sort the two arrays in ascending order
- use a set to store common unique numbers present in both arrays
- `i` is used to track numbers of arr1
- `j` is used to track numbers of arr2
- keep iterating as long as both i and j are within the bounds of their respective arrays
- if `arr1[i] < arr2[j]`, then increment i so that it points to a bigger number in arr1
- if `arr2[j] < arr1[i]`, then increment j so that it points to a bigger number in arr2
- if `arr1[i] === arr2[j]`
  - add the number to result array
  - increment both i and j
- O(mlogm + nlogn + p) time complexity
  - p is the size of the larger array
- O(k + l) space complexity
  - k is the size of the set
  - l is the size of the result array

### Binary search

- sort the arrays in ascending order
- use a set to store common unique numbers present in both arrays
- loop through arr1 and use each number as the target when you perform binary search on arr2
  - if the target is present in arr2, then we add that number to the set
- O(mlogm + nlogn + mlogn) time complexity
  - mlogn is the time required to do binary search on `nums2` array m times where m is the size of `nums1` array
- O(k + l) space complexity
