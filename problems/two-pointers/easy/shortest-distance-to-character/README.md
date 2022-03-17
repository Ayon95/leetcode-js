# Shortest distance to a character

| #   | Difficulty | Tag(s)       | Link                                                                            |
| --- | ---------- | ------------ | ------------------------------------------------------------------------------- |
| 7   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/shortest-distance-to-a-character/) |

## Approaches

- Brute force
- Two pointers

### Two pointers (caching indices of character occurrences)

- We know that the letters between the first and last occurrence of the given character will be between any two occurrences
- So, we can just calculate the distances from a letter to the right occurrence and to the left occurrence
- The distance that is smaller is the distance from the letter to the closest occurrence of the character
- for the letters that are before the first occurrence of the character, the smallest distance is basically the distance to the first occurrence
- loop through the array and find the indices at which the character is present
- create a pointer to keep track of the index of the occurrence that is immediately ahead of the current letter
- we increment this pointer only when
  - the current letter is equal to the given character AND when j doesn't point to the last occurrence index
  - this will make sure that the pointer points to the next occurrence index when there is one
- O(n) time complexity
- O(n) space complexity

### Two pointers (two passes in opposite directions)

- this approach involves looping through the string once from left to right, and once from right to left
- in the first pass (left to right), we calculate the distance from a letter to the given character that occurs on the left of it
- in the second pass (right to left), we calculate the distance from a letter to the right occurrence
- we use a pointer to keep track of the current occurrence that will be used to calculate distance from it to each letter
- we use another pointer i to iterate through the string
- initially the pointer will be set to the negative of the string's length
  - in the first pass, this will give the largest possible distance for the letters that are before the first occurrence
- in the first pass
  - if the current letter is the same as the character, then we add 0 to the result array and set occurrence pointer to i
  - else we calculate the difference between i and the occurrence pointer
  - add the differences to the result array
- in the second pass
  - if letter is equal to the character, then set occurrence pointer to i
  - else calculate the absolute difference (difference can be negative)
  - if this absolute difference is smaller than the value at index i in result array, then overwrite it with the absolute difference
- O(n) time complexity
- O(n) space complexity

### Brute force

- loop through the array and find the indices at which the character is present
- loop through the array and in each iteration
  - find the difference between the current index and each character occurrence index
- push the smallest difference to the result array
- O(n^2) time complexity
- O(n) space complexity
