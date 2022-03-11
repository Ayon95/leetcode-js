// Brute force approach
function twoSumV1(nums, target) {
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const sum = nums[i] + nums[j];
			if (sum === target) {
				result.push(i);
				result.push(j);
				return result;
			}
		}
	}

	return result;
}

console.log(twoSumV1([2, 7, 11, 15], 9));
console.log(twoSumV1([3, 2, 4], 6));
console.log(twoSumV1([3, 3], 6));

// Using a hash map (one pass)
function twoSumV2(nums, target) {
	const differences = {};
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (differences.hasOwnProperty(num)) {
			result.push(differences[num]);
			result.push(i);
			return result;
		}
		differences[target - num] = i;
	}

	return result;
}

console.log('------------');
console.log(twoSumV2([2, 7, 11, 15], 9));
console.log(twoSumV2([3, 2, 4], 6));
console.log(twoSumV2([3, 3], 6));

// Using a hash map (two pass)
function twoSumV3(nums, target) {
	const differences = {};
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		const difference = target - nums[i];
		differences[difference] = i;
	}

	for (let j = 0; j < nums.length; j++) {
		const num = nums[j];
		// the number that is a difference cannot have the same index as the one at which the difference was seen
		if (j === differences[num]) continue;
		if (differences.hasOwnProperty(num)) {
			result.push(j);
			result.push(differences[num]);
			return result;
		}
	}

	return result;
}

console.log('------------');
console.log(twoSumV3([2, 7, 11, 15], 9));
console.log(twoSumV3([3, 2, 4], 6));
console.log(twoSumV3([3, 3], 6));
