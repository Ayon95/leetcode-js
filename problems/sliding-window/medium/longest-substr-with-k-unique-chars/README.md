# Longest substring with k unique characters

| #   | Difficulty | Tag(s)         |
| --- | ---------- | -------------- |
| 34  | Medium     | Sliding window |

Given a string, find the length of the longest substring that contains exactly k unique characters. Return 0 if there are no valid substrings. The input string will contain lowercase English letters. The input string will not be empty.

```js
/*
Example 1:
- str = "aabbcc", k = 1
- answer = 2
- longest valid substring can be any one of "aa", "bb", and "cc"

Example 2:
- str = "aabbcc", k = 2
- answer = 4
- longest valid substring can be any one of "aabb", and "bbcc"

Example 3:
- str = "aabb", k = 3
- answer = 0
- there are only 2 distinct characters in the entire string
*/
```

## Sliding window

- this problem requires a dynamically-resizing window since no fixed size is mentioned
- keep growing the window until it has more than k distinct characters
- then shrink the window until it has k or fewer distinct characters

- use a hash map to keep count of each unique character in the window
- use a variable to track the count of unique characters in the window
- if we encounter a certain type of letter for the first time
  - create a property for the letter in the hash map
  - increment uniqueCharsCount
- if the window leaves behind the only occurrence of a letter
  - delete the property associated with that letter from the hash map
- O(n) time complexity
- O(26) ~ O(1) space complexity
  - the hash map can have at most 26 key-value pairs (26 letters in the English alphabet)
