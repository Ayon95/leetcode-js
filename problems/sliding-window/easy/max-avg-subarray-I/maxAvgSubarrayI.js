// Sliding window
function findMaxAverage(nums, k) {
	let maxAverage = -Infinity;
	let currentSum = 0;

	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
		const shouldCalculateAverage = i >= k - 1;
		if (shouldCalculateAverage) {
			const average = currentSum / k;
			maxAverage = average > maxAverage ? average : maxAverage;
			// shift the subarray to the right
			currentSum -= nums[i - (k - 1)];
		}
	}

	return maxAverage;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));

// Sliding window (two loops)
function findMaxAverageV2(nums, k) {
	let maxAverage = -Infinity;
	let currentSum = 0;

	for (let i = 0; i < k; i++) {
		currentSum += nums[i];
	}

	maxAverage = currentSum / k;

	for (let i = k; i < nums.length; i++) {
		currentSum = currentSum - nums[i - k] + nums[i];
		const average = currentSum / k;
		maxAverage = average > maxAverage ? average : maxAverage;
	}

	return maxAverage;
}

console.log('---------');
console.log(findMaxAverageV2([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverageV2([5], 1));
