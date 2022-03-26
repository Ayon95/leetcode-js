# Longest repeating character replacement

| #   | Difficulty | Tag(s)                   | Link                                                                                   |
| --- | ---------- | ------------------------ | -------------------------------------------------------------------------------------- |
| 19  | Medium     | Sliding window, hash map | [View problem](https://leetcode.com/problems/longest-repeating-character-replacement/) |

## Sliding window

- the idea is to examine a window of letters and determine which letter occurs the most and how many letters are different
- then we will see if we have enough replacements to replace these odd letters with the most frequent letter
- the difference between window length and count of the most frequent letter will give the number of letters that we need to replace
- if the number of different letters is less than or equal to the number of replacements we can do, we know that the window is a valid substring
- grow the window as long as you can maintain a valid substring
  - that is as long as you have enough replacements to replace the different letters
- then shrink the window until you can maintain a valid substring again
  - when there are too many different letters, you have no option but to shrink the window
  - a substring becomes invalid when you don't have enough replacements to replace all the different characters
- once we ensure that the current window is valid, compare its length with the current max length
- use a hash map to track the count of letters in the window
- use a pointer to track the start of the window
- O(26n) ~ O(n) time complexity
  - in the worst case, the frequencies hash map will contain 26 key-value pairs (for 26 English letters)
  - in that case, 26 iterations will have to be made to find the count of the most frequent character
- O(1) space complexity
  - the hash map can contain at most 26 key-value pairs no matter how long the input string is

## Sliding window (more optimal version)

The problem asks for the longest valid substring. The length of the longest substring is the sum of k and the overall max occurrence of a character. So, it is important to track this overall max occurrence. We don't really care about any max frequency of a window that is less than the overall max frequency. We don't need to concern ourselves with valid substrings that are shorter than what we have already seen. We just need to look for a longer valid substring if there is any.

- When will we have the longest valid substring?
  - when the count of the most frequent letter (max frequency) in the window is the highest in the entire string
  - this is because the higher the max frequency, the fewer replacements we have to make
  - therefore, this will maximize the length of the valid substring
- another important thing to note is that the max length of a valid substring can only increase when the max frequency increases
  - so you don't have to find the count of the most frequent character from the hash map every time you check whether or not the window is valid
  - only update max frequency when you see that the count of a letter in the window is greater than the current max frequency
    - this means that we have encountered a window where the most frequent letter is more prevalent within that window compared to previous windows we have analyzed
    - so, we know that this window can be further extended than previous windows while still being valid
- O(n) time complexity
- O(1) space complexity
