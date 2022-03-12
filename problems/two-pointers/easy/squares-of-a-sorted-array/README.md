# Squares of a sorted array

| #   | Difficulty | Tag(s)       | Link                                                                     |
| --- | ---------- | ------------ | ------------------------------------------------------------------------ |
| 2   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/squares-of-a-sorted-array/) |

## Approaches

- Brute force
- Two pointers

### Brute force

This approach involves finding the squares of each number, and then sorting them using a sorting algorithm.

- loop through the array and square each number
- sort the array (using bubble sort)
  - use nested loops
  - the outer loop is for making multiple passes through the array (n in worst case)
  - the inner loop will compare each number with the next and sort them (in ascending order)
  - the number of changes made in a pass will be tracked in a variable
  - if the number of changes made in a pass is 0,
    then it means that the array is sorted and we can break out of the outer loop
  - at the end of each pass, changes variable will be reset to 0
- O(n^2) time complexity
- O(1) space complexity

### Two pointers

The input array is sorted which means that the largest absolute values will be at the extremities of the array. We can use two pointers to compare the largest absolute values at the edges of the array, and add the largest squares to the output array one by one from end to start. We have to check the two ends of the array because the array can have negative numbers. In case of negative numbers, it is possible that the squares of those numbers are larger than the squares of the largest numbers.

- left pointer is for keeping track of the current smallest number (whose square hasn't been added to the result array)
  - left pointer will start from the beginning of the array
  - the beginning of the array will have the smallest numbers
- right pointer is for keeping track of the current largest number (whose square hasn't been added to the result array)
  - right pointer will start from the end of the array
  - the end of the array will have the largest numbers
- initialize an empty array which will eventually have all the squares arranged in ascending order
- we need to loop from the back of the array (reverse loop)
  - in each iteration, we will add the square of the current largest absolute number to the result array
  - so, the result array will be filled from the end
- if the absolute value of the current smallest number is greater than that of the current largest number
  - add the square of the current smallest number to the result array
  - increment left pointer so that it can point to the next smallest number
- if the absolute value of the current smallest number is smaller than or equal to that of the current largest number
  - add the square of the current largest number to the result array
  - decrement right pointer so that it points to the next largest number
- O(n) time complexity
- O(n) space complexity
