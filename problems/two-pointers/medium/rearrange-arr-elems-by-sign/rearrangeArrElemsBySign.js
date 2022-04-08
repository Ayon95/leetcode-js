// Two pointers (two pass, using a hash map)
function rearrangeArray(nums) {
	let evenIndex = 0;
	let oddIndex = 1;
	const numsAtCorrectIndices = {};

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			numsAtCorrectIndices[evenIndex] = nums[i];
			evenIndex += 2;
		} else {
			numsAtCorrectIndices[oddIndex] = nums[i];
			oddIndex += 2;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		nums[i] = numsAtCorrectIndices[i];
	}

	return nums;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([-3, -2, -1, 1, 2, 3]));
console.log(rearrangeArray([-1, 1]));

// Two pointers (one pass, without hash map)
function rearrangeArrayV2(nums) {
	let evenIndex = 0;
	let oddIndex = 1;
	const numsArranged = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			numsArranged[evenIndex] = nums[i];
			evenIndex += 2;
		} else {
			numsArranged[oddIndex] = nums[i];
			oddIndex += 2;
		}
	}

	nums = numsArranged;

	return nums;
}

console.log('---------');
console.log(rearrangeArrayV2([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArrayV2([-3, -2, -1, 1, 2, 3]));
console.log(rearrangeArrayV2([-1, 1]));
