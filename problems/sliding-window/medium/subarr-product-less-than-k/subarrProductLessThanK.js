// Sliding window
function numSubarrayProductLessThanK(nums, k) {
	if (k <= 1) return 0;
	if (nums.length === 1) return nums[0] < k ? 1 : 0;

	let start = 0;
	let count = 0;
	let currentProduct = 1;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		currentProduct = currentProduct * num;

		while (currentProduct >= k) {
			// shrink the window
			currentProduct = currentProduct / nums[start];
			start++;
		}

		count += i - start + 1;
	}

	return count;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([4, 12, 6, 7, 60], 60));
console.log(numSubarrayProductLessThanK([4, 12, 60, 7, 6], 60));
console.log(numSubarrayProductLessThanKV2([10, 2, 2, 5, 4, 4, 4, 3, 7, 7], 289));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
console.log(numSubarrayProductLessThanK([1, 1, 1], 1));
console.log(numSubarrayProductLessThanK([5], 10));
console.log(numSubarrayProductLessThanK([4], 2));
console.log(numSubarrayProductLessThanK([4, 2], 2));

// Brute force
function numSubarrayProductLessThanKV2(nums, k) {
	if (k === 0) return 0;
	if (nums.length === 1) return nums[0] < k ? 1 : 0;

	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		let product = 1;

		for (let j = i; j < nums.length; j++) {
			product = product * nums[j];
			if (product < k) count++;
			else break;
		}
	}

	return count;
}

console.log('---------');
console.log(numSubarrayProductLessThanKV2([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanKV2([4, 12, 6, 7, 60], 60));
console.log(numSubarrayProductLessThanKV2([4, 12, 60, 7, 6], 60));
console.log(numSubarrayProductLessThanKV2([10, 2, 2, 5, 4, 4, 4, 3, 7, 7], 289));
console.log(numSubarrayProductLessThanKV2([1, 2, 3], 0));
console.log(numSubarrayProductLessThanKV2([5], 10));
console.log(numSubarrayProductLessThanKV2([4], 2));
console.log(numSubarrayProductLessThanKV2([4, 2], 2));
