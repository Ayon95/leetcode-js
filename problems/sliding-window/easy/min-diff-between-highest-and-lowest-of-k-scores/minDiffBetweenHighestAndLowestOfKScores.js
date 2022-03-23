const mergeSort = require('../../../../utilities/mergeSort');

/*
Sliding window (using merge sort)

We have to sort the nums array so that we can use sliding window to solve the problem.
If the array is sorted, it'll be easier for us to find the smallest difference between highest and lowest of any k numbers.
Since the numbers are sorted, the difference between any two consecutive numbers would be smaller than the difference between two numbers that are further apart.
this will allow us to use the sliding window approach to find k consecutive numbers whose highest and lowest have the smallest difference.

- sort the array (in ascending order)
- loop through the sorted array starting from 0 until kth last element
- number at i will be the smallest number in the current window (subarray)
- number at i + (k - 1) will be the largest number in the current window
- calculate the difference between the smallest and largest number
- compare the calculated difference with the current minimum difference
- O(n log n) time complexity
- O(n) space complexity
*/

function minimumDifference(nums, k) {
	if (k === 1) return 0;

	const sortedNums = mergeSort(nums);
	let minDifference = Infinity;

	for (let i = 0; i <= nums.length - k; i++) {
		const difference = sortedNums[i + (k - 1)] - sortedNums[i];
		minDifference = difference < minDifference ? difference : minDifference;
	}

	return minDifference;
}

console.log(minimumDifference([9, 4, 1, 7], 2));
console.log(minimumDifference([90], 1));
