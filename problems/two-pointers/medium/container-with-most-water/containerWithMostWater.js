// Brute force
function maxArea(heights) {
	let maxValue = 0;

	for (let i = 0; i < heights.length; i++) {
		for (let j = i + 1; j < heights.length; j++) {
			const height = Math.min(heights[i], heights[j]);
			const length = j - i;
			maxValue = Math.max(maxValue, height * length);
		}
	}

	return maxValue;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([0, 2, 6, 1, 3, 7, 5]));
console.log(maxArea([2, 1, 5, 3, 2, 6]));
console.log(maxArea([1, 1, 3, 6, 1, 2, 2, 7, 1, 2, 3]));
console.log(maxArea([1, 1]));

// Two pointers
function maxAreaV2(heights) {
	let maxValue = 0;
	let left = 0;
	let right = heights.length - 1;

	while (left < right) {
		const height = Math.min(heights[left], heights[right]);
		const length = right - left;

		maxValue = Math.max(maxValue, height * length);

		if (heights[left] <= heights[right]) left++;
		else right--;
	}

	return maxValue;
}

console.log('---------');
console.log(maxAreaV2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxAreaV2([0, 2, 6, 1, 3, 7, 5]));
console.log(maxAreaV2([2, 1, 5, 3, 2, 6]));
console.log(maxAreaV2([1, 1, 3, 6, 1, 2, 2, 7, 1, 2, 3]));
console.log(maxAreaV2([1, 1]));
