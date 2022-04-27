# Find target indices after sorting array

| #   | Difficulty | Tag(s)        | Link                                                                                   |
| --- | ---------- | ------------- | -------------------------------------------------------------------------------------- |
| 45  | easy       | Binary search | [View problem](https://leetcode.com/problems/find-target-indices-after-sorting-array/) |

## Binary search

- sort the array
- find the index at which the target occurs for the first time
- find the index of the last occurrence of the target
- push the indices from `firstOccurrenceIndex` up to `lastOccurrenceIndex` into the `result` array
- O(nlogn + 2logn + p) ~ O(nlogn) time complexity
  - `p` is `lastOccurrenceIndex`
- O(k) space complexity
  - k is the size of `result` array

## Counting sort

- find the count of numbers less than `target`
- find the count of numbers equal to `target`
- O(n + p) time complexity
  - p is the count of numbers equal to the target
- O(k) space complexity
