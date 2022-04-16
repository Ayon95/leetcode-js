/*
Linear search using hash map

*/

function findKthPositive(arr, k) {
	const numsPresent = {};

	for (let i = 0; i < arr.length; i++) {
		numsPresent[arr[i]] = true;
	}

	for (let i = 1; i <= 2000; i++) {
		if (!numsPresent[i]) k--;
		if (k === 0) return i;
	}
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
console.log(findKthPositive([2, 3, 4], 1));
console.log(findKthPositive([5, 6, 7, 8, 9], 9));

/*
Binary search
*/

function findKthPositiveV2(arr, k) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		const midIndex = Math.floor((end - start) / 2) + start;
		const missingNumsCountAtMidIndex = arr[midIndex] - (midIndex + 1);
		const missingNumsCountJustBeforeMidIndex = arr[midIndex - 1] - (midIndex - 1 + 1);
		if (missingNumsCountAtMidIndex < k) {
			start = midIndex + 1;
		} else if (missingNumsCountAtMidIndex >= k && missingNumsCountJustBeforeMidIndex >= k) {
			end = midIndex - 1;
		} else {
			return arr[midIndex] - (missingNumsCountAtMidIndex - k + 1);
		}
	}

	return arr.length + k;
}

console.log('---------');
console.log(findKthPositiveV2([2, 3, 4, 7, 11], 5));
console.log(findKthPositiveV2([1, 2, 3, 4], 2));
console.log(findKthPositiveV2([2, 3, 4], 1));
console.log(findKthPositiveV2([5, 6, 7, 8, 9], 9));
