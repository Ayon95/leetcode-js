// Two pointers
function sortArrayByParity(nums) {
	if (nums.length === 1) return nums;

	let result = [];
	let left = 0;
	let right = nums.length - 1;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num % 2 === 0) {
			result[left] = num;
			left++;
		} else {
			result[right] = num;
			right--;
		}
	}

	return result;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([10, 15, 42, 3, 8, 2, 13]));
console.log(sortArrayByParity([1, 0]));
console.log(sortArrayByParity([8]));

// Two pointers (in-place)
function sortArrayByParityV2(nums) {
	if (nums.length === 1) return nums;

	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		if (isEven(nums[left])) {
			left++;
			continue;
		}
		if (!isEven(nums[right])) {
			right--;
			continue;
		}

		const oddNum = nums[left];
		nums[left] = nums[right];
		nums[right] = oddNum;
		left++;
		right--;
	}

	return nums;

	function isEven(num) {
		return num % 2 === 0;
	}
}

console.log('-----------');
console.log(sortArrayByParityV2([3, 1, 2, 4]));
console.log(sortArrayByParityV2([10, 15, 42, 3, 8, 2, 13]));
console.log(sortArrayByParityV2([1, 0]));
console.log(sortArrayByParityV2([8]));
