# Number of substrings containing all three characters

| #   | Difficulty | Tag(s)                   | Link                                                                                                |
| --- | ---------- | ------------------------ | --------------------------------------------------------------------------------------------------- |
| 16  | Medium     | Sliding window, hash map | [View problem](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) |

## Sliding window

- this problem requires a flexible sliding window that grows and shrinks because no size constraint is provided
- the idea is to grow the window until each of the three characters is found at least once
  and then shrink the window until it no longer contains each character at least once
- iterate through the string and keep growing and shrinking the window until the end is reached
- as you shrink the window, all substrings occurring before it will be valid substrings
- the number of these valid substrings is equal to the number of letters that the window has passed (left behind) so far

- use a hash map to track the frequency of each type of letter in the window
- use a pointer to keep track of the start index of the window
  - the window will shrink when this pointer is incremented
- another pointer will be used to iterate through the string
  - the window will grow when this pointer is incremented
- O(n) time complexity
- O(1) space complexity
  - the hash map will always contain three key-value pairs

## Sliding window (approach 2)

- instead of counting valid substrings based on how many letters the window has passed, we count valid substrings based on how many letters are ahead of the window
- the idea is that if a substring starting at x has a, b, and c then every longer substring starting at x will also have at least one a, b, and c
  - the smallest valid substring will be present in all larger substrings
  - so, for a window containing a valid substring, the total number of valid substrings = smallest valid substring + any larger subsequent substrings
