// Binary search
function searchInsert(nums, target) {
	let start = 0;
	let end = nums.length - 1;

	while (start <= end) {
		const middleIndex = Math.floor((end - start) / 2) + start;
		if (nums[middleIndex] === target) return middleIndex;
		if (nums[middleIndex] > target) end = middleIndex - 1;
		if (nums[middleIndex] < target) start = middleIndex + 1;
	}

	return start;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1], 2));
console.log(searchInsert([1], 0));
