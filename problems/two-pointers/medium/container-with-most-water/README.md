# Container with most water

| #   | Difficulty | Tag(s)       | Link                                                                     |
| --- | ---------- | ------------ | ------------------------------------------------------------------------ |
| 27  | Medium     | Two pointers | [View problem](https://leetcode.com/problems/container-with-most-water/) |

## Approaches

- Brute force
- Two pointers

### Brute force

- iterate through the array and in each iteration
  - find the area (height \* length) between the current line and each line that comes after it
- O(n^2) time complexity
- O(1) space complexity

### Two pointers

- we start with the max possible length (i.e. the widest container) and then we shrink from the side of the smaller height with the hope of finding a bigger height
  - we want to maximize the area so we want the length and height to be as big as possible
- use two pointers to track two vertical lines of a container
- if the left line is shorter than or equal to right line, then increment left pointer
- if the right line is shorter then decrement right pointer
- we change the pointers so that we can have a chance of finding longer lines
- note that when the two lines are equal, it doesn't matter which pointer we change
  - because the height will be limited by the smaller height no matter what
  - and the width will be less than before
  - in either case, the area will be less than the previous container with equal heights
- keep iterating as long as left is less than right
- O(n) time complexity
- O(1) space complexity
