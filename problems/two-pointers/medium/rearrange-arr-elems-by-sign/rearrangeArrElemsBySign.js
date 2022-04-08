// Using a hash map
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
