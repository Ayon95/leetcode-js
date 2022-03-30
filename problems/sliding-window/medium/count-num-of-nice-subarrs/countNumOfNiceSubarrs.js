// Sliding window (approach 1)
function numberOfSubarrays(nums, k) {
	if (k > nums.length) return 0;

	let subarraysCount = 0;
	let oddNumsCount = 0;
	let start = 0;
	let idxOddNumIndices = 0;
	const oddNumIndices = [];

	for (let i = 0; i < nums.length; i++) {
		if (isOdd(nums[i])) {
			oddNumsCount++;
			oddNumIndices.push(i);
		}

		while (oddNumsCount > k) {
			const startNum = nums[start];
			const firstOddNumIndex = oddNumIndices[idxOddNumIndices];
			// shrink the window
			if (isOdd(startNum)) oddNumsCount--;
			if (start === firstOddNumIndex) idxOddNumIndices++;
			start++;
		}

		if (oddNumsCount === k) {
			const firstOddNumIndex = oddNumIndices[idxOddNumIndices];
			subarraysCount += firstOddNumIndex - start + 1;
		}
	}

	return subarraysCount;

	function isOdd(num) {
		return num % 2 === 1;
	}
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 4, 6], 1));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
console.log(numberOfSubarrays([1, 3, 5], 4));
console.log(numberOfSubarrays([11, 23, 35], 1));

// Sliding window (approach 2)
function numberOfSubarraysV2(nums, k) {
	let start = 0;
	let total = 0;
	let subArrcount = 0;
	let oddNumsCount = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 1) {
			oddNumsCount++;
			subArrcount = 0;
		}

		while (oddNumsCount === k) {
			const startNum = nums[start];
			if (startNum % 2 === 1) oddNumsCount--;
			start++;
			subArrcount++;
		}

		total += subArrcount;
	}

	return total;
}

console.log('----------');
console.log(numberOfSubarraysV2([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarraysV2([2, 4, 6], 1));
console.log(numberOfSubarraysV2([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
console.log(numberOfSubarraysV2([1, 3, 5], 4));
console.log(numberOfSubarraysV2([11, 23, 35], 1));
