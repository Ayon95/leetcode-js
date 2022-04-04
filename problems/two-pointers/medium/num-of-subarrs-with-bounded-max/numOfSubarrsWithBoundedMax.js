// Two pointers
function numSubarrayBoundedMax(nums, low, high) {
	let count = 0;
	let start = 0;
	let longestSubarrLength = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num > high) {
			start = i + 1;
			longestSubarrLength = 0;
			continue;
		}

		if (num >= low && num <= high) {
			longestSubarrLength = i - start + 1;
		}

		count += longestSubarrLength;
	}

	return count;
}

console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3));
console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8));
console.log(numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69));
console.log(numSubarrayBoundedMax([5], 2, 4));
console.log(numSubarrayBoundedMax([2], 2, 4));
