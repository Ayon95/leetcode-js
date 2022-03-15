# Move zeroes

| #   | Difficulty | Tag(s)       | Link                                                       |
| --- | ---------- | ------------ | ---------------------------------------------------------- |
| 6   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/move-zeroes/) |

## Two pointers

One pointer is used to keep track of indices in which non-zero numbers will be placed. Another pointer is used to iterate through the array.

### Using two loops

- We take advantage of the fact that we already know what type of number should be pushed to the end of the array
- So, we can use a pointer to keep track of indices for non-zero numbers
- We place the non-zero numbers one by one in the correct index
- Each time we place a non-zero number, we increment the pointer
- After placing all the non-zero numbers, the pointer will be equal to the index position of the first 0
- Then we can start a for loop from this pointer and fill each position with 0 until the end of the array is reached
- O(n) time complexity
- O(1) space complexity

### Using one loop

- after we place a non-zero number, we check whether pointer non-zero index is the same as pointer i in the loop
  - if they are not the same, then that means a spot just became available for placing a 0
  - since we moved the non-zero number from i to the appropriate non-zero index, we can place 0 at i
- O(n) time complexity
- O(1) space complexity

### Using a hash map

- use a hash map to store the numbers and their correct indices
  - we can use these indices to arrange the numbers in the right order
- one pointer will be used to keep track of indices for non-zero numbers
- another pointer will be used to keep track of indices for zero numbers
- the index for non-zero numbers will start from 0
  - this is because non-zero numbers need to be before all zeroes
- the index for zeroes will start from the last position
  - this is because zeroes to be at the end
- loop through the array and check if the current number is zero or non-zero
- if the current number is non-zero
  - add it to the hash map as the value, and the key should be the current value of non-zero index
  - increment non-zero index, so that the next non-zero number can have the correct index
    - this will ensure that the relative order of the non-zero numbers is preserved
- if the current number is 0
  - add it to the hash map as the value, and the key should be the current value of zero index
  - decrement zero index, so that the next non-zero number can be placed in the next available spot from the end
- loop through the array and put the numbers in the correct position using the hash map
- O(n) time complexity
- O(n) space complexity
