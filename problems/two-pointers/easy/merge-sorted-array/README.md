# Merge sorted array

| #   | Difficulty | Tag(s)       | Link                                                              |
| --- | ---------- | ------------ | ----------------------------------------------------------------- |
| 4   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/merge-sorted-array/) |

## Approaches

- Brute force (bubble sort)
- Two pointers

### Brute force (bubble sort)

- loop through array 2 and push each item to array 1 starting from index m
- use bubble sort algorithm to sort array 1 in non-decreasing order
- O(n^2) time complexity
- O(1) space complexity

### Two pointers

- we can take advantage of the fact that the arrays are sorted in non-decreasing order
- we know that the last number is the largest number in each of the arrays
- we can compare the largest numbers of the two arrays and see which one is larger
- the larger number is placed at the end of the output array (this is the overall largest number)
- then we can compare the largest number of one array with the second largest number of the other array
- this way, we can gradually arrange the numbers in non-decreasing order in the output array

- pointer i will keep track of the unsorted largest number in array 1
- pointer j will keep track of the unsorted largest number in array 2
- array 1 will ultimately have all the numbers in the correct order
  - so, we have to loop through array 1 from end to start (reverse loop)
  - in each iteration, we place the largest unsorted number in the current available position
  - at the end of the loop, array 1 will have the numbers from both arrays arranged in non-decreasing order
- if number at index i is greater than number at index j OR all numbers in array 2 have been sorted
  - put number at index i in the correct place
  - decrement i so that it points to the next largest number in array 1
- else if number at index i is less than or equal to number at index j OR all numbers in array 1 have been sorted
  - put number at index j in the correct place
  - decrement j so that it points to the next largest number in array 2
- O(m + n) time complexity
- O(1) space complexity

### Two pointers (a bit more efficient)

- to make the algorithm more efficient, we can run a while loop as long as we have numbers to sort in nums2 array
- this way, we won't need to always iterate the length of nums1 array
- when all numbers from nums2 array have been placed in the correct position, we will have the complete set of numbers sorted
