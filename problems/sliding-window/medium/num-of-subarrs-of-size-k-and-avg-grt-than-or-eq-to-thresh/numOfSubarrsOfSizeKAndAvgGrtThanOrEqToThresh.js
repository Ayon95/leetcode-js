// Sliding window
function numOfSubarrays(arr, k, threshold) {
	if (arr.length === 1 && k === 1) {
		if (arr[0] >= threshold) return 1;
		else return 0;
	}

	let count = 0;
	let currentSum = 0;

	for (let i = 0; i < arr.length; i++) {
		currentSum += arr[i];

		if (i >= k - 1) {
			const average = currentSum / k;
			if (average >= threshold) count++;
			// shift window to the right
			currentSum -= arr[i - (k - 1)];
		}
	}

	return count;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
console.log(numOfSubarrays([10], 1, 8));
console.log(numOfSubarrays([4], 2, 5));
