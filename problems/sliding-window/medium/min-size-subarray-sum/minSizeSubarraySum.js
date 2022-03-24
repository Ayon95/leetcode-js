// Sliding window
function minSubArrayLen(target, nums) {
	if (nums.length === 1) {
		return nums[0] === target ? 1 : 0;
	}

	let minLength = Infinity;
	let start = 0;
	let currentSum = 0;

	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];

		while (currentSum >= target) {
			const windowLength = i - start + 1;
			minLength = Math.min(minLength, windowLength);
			if (minLength === 1) return minLength;
			// shrink the window by subtracting the first number of the window from the sum
			currentSum -= nums[start];
			start++;
		}
	}

	return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(5, [4]));
console.log(minSubArrayLen(5, [5]));
console.log(minSubArrayLen(6, [8, 2, 3, 5]));
