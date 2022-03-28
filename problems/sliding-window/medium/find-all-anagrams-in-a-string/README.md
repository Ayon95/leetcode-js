# Find all anagrams in a string

| #   | Difficulty | Tag(s)                   | Link                                                                         |
| --- | ---------- | ------------------------ | ---------------------------------------------------------------------------- |
| 20  | Medium     | Sliding window, hash map | [View problem](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |

## Sliding window

For a substring to be an anagram of string p:

- the substring's length should be equal to the length of string p
- the substring should have all the letters of string p in the right amount

### Intuitive, less-efficient approach

- the idea is to go through the input string and analyze each substring having the same length as string p
- so the window size will remain fixed
- compare the count of each letter in the substring (window) with that of each letter in string p
- use two hash maps to track the count of each letter in string p and window
- use a pointer to keep track of the starting point of the window
- O(m \* n) time complexity
  - n is the length of the input string
  - m is the length of string p
- O(n) worst-case space complexity
  - result array will contain n number of elements, if each letter in input string is a substring that is an anagram of string p
  - e.g. str = 'aaaa', p = 'a'

### More-efficient approach

- this approach is all about which letters we need and how many of each of them we need for a substring to be an anagram
- use a hash map to track the count of each letter in string p
  - this hash map will reflect how many occurrences of each letter we need in a substring
- use a variable to track how many letters are needed
  - initially it will be equal to the length of string p
- iterating through the input string
  - if the current letter is one of the letters that we need, we decrement its count in the hash map (since the current window contains an instance of a needed letter)
  - after decrementing, if the count is greater than or equal to 0
    - in that case, we decrement lettersNeeded (since the window/current substring has a needed letter)
  - we don't decrement lettersNeeded if the count is less than 0
    - when the count of a needed letter is negative, it means that the window has too many occurrences of that letter
    - therefore, the window does not have another letter that it needs
- whenever lettersNeeded becomes 0, it means that the current substring contains all the letters needed for it to be an anagram of p
  - in that case, add the start index of the window to the result array
- when we shift the window to the right
  - if the start letter is a needed letter, we increment its count in the hash map
    - the window is leaving behind an occurrence of a needed letter
  - after incrementing, if the count becomes greater than 0, increment lettersNeeded
    - the window no longer contains a needed letter
  - we don't increment lettersNeeded if the count is is less than or equal to 0
    - the window still contains enough occurrences of a needed letter even after leaving behind an occurrence of that letter
- O(n) time complexity
- O(n) worst-case space complexity
