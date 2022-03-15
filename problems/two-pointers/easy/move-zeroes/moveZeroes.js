// Using two loops
function moveZeroes(nums) {
	if (nums.length === 1) {
		console.log(nums);
		return;
	}

	let nonZeroesIndex = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num !== 0) {
			nums[nonZeroesIndex] = num;
			nonZeroesIndex++;
		}
	}

	// This will be the case if all numbers in the array are 0
	if (nonZeroesIndex === 0) return;

	for (let i = nonZeroesIndex; i < nums.length; i++) {
		nums[i] = 0;
	}

	console.log(nums);
}

console.log('---------');
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([1, 10, 4, 0, 0, 6, 0]);
moveZeroes([0]);

// Using one loop
function moveZeroesV2(nums) {
	if (nums.length === 1) {
		console.log(nums);
		return;
	}

	let nonZeroesIndex = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num !== 0) {
			nums[nonZeroesIndex] = num;
			nums[i] = nonZeroesIndex === i ? num : 0;
			// Alternative way (swapping)
			// [nums[nonZeroesIndex], nums[i]] = [num, nums[nonZeroesIndex]];
			nonZeroesIndex++;
		}
	}

	console.log(nums);
}

console.log('----------');
moveZeroesV2([0, 1, 0, 3, 12]);
moveZeroesV2([1, 10, 4, 0, 0, 6, 0]);
moveZeroesV2([0]);

// Using a hash map
function moveZeroesV3(nums) {
	if (nums.length === 1) {
		console.log(nums);
		return;
	}

	let nonZeroesIndex = 0;
	let zeroesIndex = nums.length - 1;
	let indicesAndTheirValues = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num !== 0) {
			indicesAndTheirValues[nonZeroesIndex] = num;
			nonZeroesIndex++;
		} else {
			indicesAndTheirValues[zeroesIndex] = num;
			zeroesIndex--;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		nums[i] = indicesAndTheirValues[i];
	}

	console.log(nums);
}

moveZeroesV3([0, 1, 0, 3, 12]);
moveZeroesV3([1, 10, 4, 0, 0, 6, 0]);
moveZeroesV3([0]);
