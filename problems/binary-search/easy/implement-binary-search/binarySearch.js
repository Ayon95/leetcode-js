// Binary search using two pointers
function search(nums, target) {
	let start = 0;
	let end = nums.length - 1;

	while (start <= end) {
		const middleIndex = Math.floor((end - start) / 2) + start;
		if (nums[middleIndex] === target) return middleIndex;
		else if (nums[middleIndex] < target) start = middleIndex + 1;
		else end = middleIndex - 1;
	}

	return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([1, 2, 3, 4, 5], 1));
console.log(search([5], 5));
console.log(search([5], 2));
