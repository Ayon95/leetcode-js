# Reverse words in a string III

| #   | Difficulty | Tag(s)       | Link                                                                         |
| --- | ---------- | ------------ | ---------------------------------------------------------------------------- |
| 8   | Easy       | Two pointers | [View problem](https://leetcode.com/problems/reverse-words-in-a-string-iii/) |

## Two pointers

- we know that there will be a word just before an empty space
- find the indices at which empty space occurs
- one pointer will be used to keep track of empty space indices
- another pointer (suppose j) will be used for keeping track of letters from the end of a word
  - with this pointer, we will be able to swap letters from the start and end of a word
  - initially j will point to the last letter of the first word
- pointer i will be used to iterate through the string
- a swap will be performed if i is less than j
  - decrement j so that it points to the next letter from the end
- if i reaches or crosses j, then the word will have been reversed, and we can just skip that iteration
- if there is an empty space at i
  - increment empty-space pointer if there is any next empty space to move to
  - move j to the last letter of the next word
- O(n) time complexity
- O(n) space complexity

## Two pointers (second approach)

- split the input string into an array of words
- reverse each word
- create a string by joining the words separated by empty space
- O(n) time complexity
  - not O(n^2) even though there are nested loops because the input is split up into words
  - the outer loop goes through each word
  - the nested loop is based on the length of each word
- O(n) space complexity
