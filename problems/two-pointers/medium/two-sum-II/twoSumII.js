// Two pointers
function twoSum(nums, target) {
	let i = 0;
	let j = nums.length - 1;

	while (i < j) {
		const sum = nums[i] + nums[j];

		if (sum > target) j--;
		else if (sum < target) i++;
		else return [i + 1, j + 1];
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-3, -1, 4, 6, 10], 14));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));

// Using a hash map
function twoSumV2(nums, target) {
	const numIndices = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const difference = target - num;
		if (numIndices[difference] !== undefined) {
			return [numIndices[difference] + 1, i + 1];
		}
		numIndices[num] = i;
	}
}

console.log('----------');
console.log(twoSumV2([2, 7, 11, 15], 9));
console.log(twoSumV2([-3, -1, 4, 6, 10], 14));
console.log(twoSumV2([2, 3, 4], 6));
console.log(twoSumV2([-1, 0], -1));
