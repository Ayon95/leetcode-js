// Brute force (using bubble sort)
function sortedSquares(nums) {
	let changes = 0;

	for (let i = 0; i < nums.length; i++) {
		nums[i] = nums[i] ** 2;
	}

	if (nums.length === 1) return nums;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				const temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
				changes++;
			}
		}
		if (changes === 0) break;
		changes = 0;
	}

	return nums;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-5, -3, 1, 3, 5, 15, 20]));
console.log(sortedSquares([-5, -3, -2, -1]));

// Two pointers
function sortedSquaresBetter(nums) {
	if (nums.length === 1) {
		return [nums[0] ** 2];
	}

	const sortedSquares = [];
	let left = 0;
	let right = nums.length - 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		const absOfCurrSmallest = Math.abs(nums[left]);
		const absOfCurrLargest = Math.abs(nums[right]);

		if (absOfCurrSmallest > absOfCurrLargest) {
			sortedSquares[i] = nums[left] ** 2;
			left++;
		} else {
			sortedSquares[i] = nums[right] ** 2;
			right--;
		}
	}

	return sortedSquares;
}

console.log('----------');
console.log(sortedSquaresBetter([-4, -1, 0, 3, 10]));
console.log(sortedSquaresBetter([-7, -3, 2, 3, 11]));
console.log(sortedSquaresBetter([-5, -3, 1, 3, 5, 15, 20]));
console.log(sortedSquaresBetter([-5, -3, -2, -1]));
