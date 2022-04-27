# First bad version

| #   | Difficulty | Tag(s)        | Link                                                             |
| --- | ---------- | ------------- | ---------------------------------------------------------------- |
| 39  | easy       | Binary search | [View problem](https://leetcode.com/problems/first-bad-version/) |

## Binary search

- the input number `n` is the latest bad version
- we can imagine a sequence of versions starting from 0 and ending at `n`
- use two pointers to track the start and end positions of the problem space
- find the middle version in the current problem space
- if `middle` is not a bad version
  - we have to look at the versions that come after it
- if `middle` is a bad version and `middle - 1` is also a bad version
  - we have to look at the versions that come before `middle`
  - since `middle - 1` is also a bad version, `middle` cannot be the first bad version
  - the first bad version must exist before `middle`
- if `middle` is a bad version and `middle - 1` is a good version
  - `middle` is the first bad version
- O(log n) time complexity
- O(1) space complexity
