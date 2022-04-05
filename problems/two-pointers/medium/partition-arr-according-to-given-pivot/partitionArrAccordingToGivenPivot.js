// Two pointers
function pivotArray(nums, pivot) {
	if (nums.length === 1) return nums;

	let left = 0;
	let right = nums.length - 1;
	const resultArr = [];

	for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
		if (nums[i] < pivot) {
			resultArr[left] = nums[i];
			left++;
		}

		if (nums[j] > pivot) {
			resultArr[right] = nums[j];
			right--;
		}
	}

	while (left <= right) {
		resultArr[left] = pivot;
		left++;
	}

	return resultArr;
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));

// Approach 2
function pivotArrayV2(nums, pivot) {
	if (nums.length === 1) return nums;

	const numsLessThanPivot = [];
	const numsEqualToPivot = [];
	const numsGreaterThanPivot = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num < pivot) numsLessThanPivot.push(num);
		else if (num > pivot) numsGreaterThanPivot.push(num);
		else numsEqualToPivot.push(num);
	}

	reverse(numsLessThanPivot);
	reverse(numsGreaterThanPivot);

	for (let i = 0; i < nums.length; i++) {
		if (numsLessThanPivot.length !== 0) {
			nums[i] = numsLessThanPivot.pop();
		} else if (numsEqualToPivot.length !== 0) {
			nums[i] = numsEqualToPivot.pop();
		} else {
			nums[i] = numsGreaterThanPivot.pop();
		}
	}

	return nums;

	function reverse(arr) {
		let left = 0;
		let right = arr.length - 1;

		while (left < right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		}
	}
}

console.log('--------');
console.log(pivotArrayV2([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArrayV2([-3, 4, 3, 2], 2));
