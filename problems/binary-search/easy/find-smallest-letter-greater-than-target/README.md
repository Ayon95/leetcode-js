# Find the smallest letter greater than the target

| #   | Difficulty | Tag(s)        | Link                                                                                    |
| --- | ---------- | ------------- | --------------------------------------------------------------------------------------- |
| 44  | easy       | binary search | [View problem](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) |

## How letters are compared

- letters are compared based on their ASCII code values
- for example, 'b' is greater than 'a' because the ASCII code of 'b' is 98 and that of 'a' is 97
- 'a' has the smallest ASCII code value and 'z' has the largest ASCII code value

## Binary search

- in the input array, we have to find the first letter that comes after the target letter
- find the first letter that is greater than the target letter
- use two pointers to track the start and end positions of the current problem space
- if `letters[midIndex] <= target`, a letter greater than `target` must be to the right of `letters[midIndex]`
- if `letters[midIndex] > target && letters[midIndex - 1] > target`, the smallest letter greater than `target` must be to the left of `letters[midIndex]`
- letters wrap around (edge case)
  - if the target is larger than or equal to all the letters in the array, we have to circle back to the first letter in the array
- O(log n) time complexity
- O(1) space complexity
