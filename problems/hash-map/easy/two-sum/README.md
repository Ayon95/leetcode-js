# Two sum

| #   | Difficulty | Tag(s)   | Link                                                   |
| --- | ---------- | -------- | ------------------------------------------------------ |
| 1   | Easy       | Hash map | [View problem](https://leetcode.com/problems/two-sum/) |

## Approaches

- Brute force
- Using a hash map (one pass)
- Using a hash map (two pass)

### Brute force

- this approach requires the use of nested loops
- take the current element in the outer loop and add it with every other element in the inner loop
  - testing all possible combinations
- if the sum is equal to the target, then push the indices of those numbers to the result array
- O(n^2) time complexity
- O(1) space complexity

### Using a hash map (one pass)

- in this approach, we use a hash map to store the differences
- key will be the difference and the value will be the index
  - this is the index at which this difference was seen
- the goal is to find one of the differences in the nums array
  - the difference that we find in the array will be one of the two numbers
- initially, the hash map will be empty
- as we keep iterating through the nums array
  - we check if this number is a difference that we have already seen (if the property with that difference exists)
  - if the property exists, then that means we have found the two numbers that sum to the target
  - if the property doesn't exist, we calculate the difference (target - current number), and record it in the hash map
- O(n) time complexity
- O(n) space complexity

### Using a hash map (two pass)

- this approach involves using two separate for loops
- in the first loop, we populate the hash map with differences at each index
- in the second loop, we try to find the number that is a difference
- O(2n) ~ O(n) time complexity
- O(n) space complexity
