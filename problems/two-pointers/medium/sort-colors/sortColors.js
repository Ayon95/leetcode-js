// Two pointers
function sortColors(nums) {
	if (nums.length === 1) return nums;

	let left = 0;
	let right = nums.length - 1;
	let i = 0;

	while (i <= right) {
		const num = nums[i];

		if (num === 0) {
			[nums[left], nums[i]] = [num, nums[left]];
			left++;
			i++;
		} else if (num === 2) {
			[nums[right], nums[i]] = [num, nums[right]];
			right--;
		} else i++;
	}

	console.log(nums);
}

sortColors([2, 0, 2, 1, 1, 0]);
sortColors([1, 2, 0]);

// Approach 2
function sortColorsV2(nums) {
	if (nums.length === 1) return nums;

	let zeroesCount = 0;
	let onesCount = 0;

	for (let i = 0; i < nums.length; i++) {
		switch (nums[i]) {
			case 0:
				zeroesCount++;
				break;
			case 1:
				onesCount++;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (i < zeroesCount) nums[i] = 0;
		else if (i >= zeroesCount && i < zeroesCount + onesCount) nums[i] = 1;
		else nums[i] = 2;
	}

	console.log(nums);
}

console.log('---------');
sortColorsV2([2, 0, 2, 1, 1, 0]);
sortColors([1, 2, 0]);
