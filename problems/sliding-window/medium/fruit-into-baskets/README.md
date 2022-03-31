# Fruit into baskets

| #   | Difficulty | Tag(s)                   | Link                                                              |
| --- | ---------- | ------------------------ | ----------------------------------------------------------------- |
| 24  | Medium     | Sliding window, hash map | [View problem](https://leetcode.com/problems/fruit-into-baskets/) |

## Sliding window

This problem is basically asking us to find the length of the longest subarray containing no more than 2 distinct elements.

- we will have to use a dynamically-resizing window since we don't know exactly from how many contiguous trees we can pick a fruit from
- we can pick any 2 types of fruits, so a valid window can contain only 2 types of fruit trees
- keep growing the window until it has more than 2 types of fruits
- shrink the window until it has exactly 2 types of fruits
- use a hash map to track the count of each type of fruit present in the window
- use a variable to track the count of unique fruits in a window
- use a variable to track the count of picked fruits in the current window
- if we encounter a type of fruit that we haven't seen before in the window, we increment uniqueFruitsCount
- if the window leaves behind the only instance of a fruit type, we decrement uniqueFruitsCount
- O(n) time complexity
- O(n) worst-case space complexity
  - if all the fruits in the array are unique then the hash map will have n key-value pairs
