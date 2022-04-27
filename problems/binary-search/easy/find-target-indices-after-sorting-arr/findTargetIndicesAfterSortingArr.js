/*
Binary search
- O(nlogn + 2logn + p) ~ O(nlogn) time complexity
    - p is the last occurrence index
- O(k) space complexity
*/
function targetIndices(nums, target) {
	nums.sort((a, b) => a - b);
	const result = [];
	const firstOccurrenceIndex = findFirstOccurrenceIndex();
	const lastOccurrenceIndex = findLastOccurrenceIndex();

	for (let i = firstOccurrenceIndex; i <= lastOccurrenceIndex; i++) {
		result.push(i);
	}

	return result;

	function findFirstOccurrenceIndex() {
		let start = 0;
		let end = nums.length - 1;

		while (start <= end) {
			const midIndex = Math.floor((end - start) / 2) + start;
			if (nums[midIndex] < target) start = midIndex + 1;
			else if (nums[midIndex] > target || nums[midIndex - 1] === target) end = midIndex - 1;
			else return midIndex;
		}
	}

	function findLastOccurrenceIndex() {
		let start = 0;
		let end = nums.length - 1;

		while (start <= end) {
			const midIndex = Math.floor((end - start) / 2) + start;
			if (nums[midIndex] > target) end = midIndex - 1;
			else if (nums[midIndex] < target || nums[midIndex + 1] === target) start = midIndex + 1;
			else return midIndex;
		}
	}
}

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 3));
console.log(targetIndices([100, 1, 100], 100));

/*
Counting sort
- keep count of numbers less than the target
- keep count of numbers equal to the target
- O(n + p) time complexity
	- p is the count of numbers equal to the target
- O(k) space complexity
*/
function targetIndicesV2(nums, target) {
	let lessThanTargetCount = 0;
	let equalToTargetCount = 0;
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num < target) lessThanTargetCount++;
		if (num === target) equalToTargetCount++;
	}

	for (let i = 0; i < equalToTargetCount; i++) {
		result.push(i + lessThanTargetCount);
	}

	return result;
}

console.log('---------');
console.log(targetIndicesV2([1, 2, 5, 2, 3], 2));
console.log(targetIndicesV2([1, 2, 5, 2, 3], 3));
console.log(targetIndicesV2([100, 1, 100], 100));

/*
Sorting with linear search
- O(nlogn + n) ~ O(nlogn) time complexity
- O(k) space complexity
*/
function targetIndicesV3(nums, target) {
	const result = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num === target) result.push(i);
		if (num > target) break;
	}

	return result;
}

console.log('---------');
console.log(targetIndicesV3([1, 2, 5, 2, 3], 2));
console.log(targetIndicesV3([1, 2, 5, 2, 3], 3));
console.log(targetIndicesV3([100, 1, 100], 100));
