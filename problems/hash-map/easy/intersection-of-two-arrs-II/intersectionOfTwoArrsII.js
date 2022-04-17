// Using a hash map
function intersect(nums1, nums2) {
	// making sure that nums1 is always the smaller of the two arrays
	if (nums2.length < nums1.length) {
		[nums1, nums2] = [nums2, nums1];
	}

	const nums1Frequencies = {};
	const result = [];

	for (let i = 0; i < nums1.length; i++) {
		const num = nums1[i];
		if (nums1Frequencies[num] === undefined) {
			nums1Frequencies[num] = 1;
		} else nums1Frequencies[num]++;
	}

	for (let i = 0; i < nums2.length; i++) {
		const num = nums2[i];
		if (nums1Frequencies[num] > 0) {
			result.push(num);
			nums1Frequencies[num]--;
		}
	}

	return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// Using two pointers
function intersectV2(nums1, nums2) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	let i = 0;
	let j = 0;
	const result = [];

	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) i++;
		else if (nums1[i] > nums2[j]) j++;
		else {
			result.push(nums1[i]);
			i++;
			j++;
		}
	}

	return result;
}

console.log('---------');
console.log(intersectV2([1, 2, 2, 1], [2, 2]));
console.log(intersectV2([4, 9, 5], [9, 4, 9, 8, 4]));

// Binary search
function intersectV3(nums1, nums2) {
	if (nums2.length < nums1.length) {
		[nums1, nums2] = [nums2, nums1];
	}

	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	const result = [];

	for (let i = 0; i < nums1.length; i++) {
		const target = nums1[i];
		let start = 0;
		let end = nums2.length - 1;

		while (start <= end) {
			const midIndex = Math.floor((end - start) / 2) + start;
			if (nums2[midIndex] < target) start = midIndex + 1;
			else if (nums2[midIndex] > target) end = midIndex - 1;
			else {
				result.push(target);
				break;
			}
		}
	}

	return result;
}

console.log('---------');
console.log(intersectV3([1, 2, 2, 1], [2, 2]));
console.log(intersectV3([4, 9, 5], [9, 4, 9, 8, 4]));
