// Using a hash map
function intersection(nums1, nums2) {
	const uniqueNums = {};
	const result = [];

	for (let i = 0; i < nums1.length; i++) {
		const num = nums1[i];
		if (uniqueNums[num] === undefined) {
			uniqueNums[num] = true;
		}
	}

	for (let i = 0; i < nums2.length; i++) {
		const num = nums2[i];
		if (uniqueNums[num] !== undefined) {
			result.push(num);
			delete uniqueNums[num];
		}
	}

	return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([6, 2, 5], [1, 2, 10, 6, 11, 5]));

// Two pointers
function intersectionV2(nums1, nums2) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	const uniqueNums = new Set();
	let i = 0;
	let j = 0;

	while (i < nums1.length && j < nums2.length) {
		const num1 = nums1[i];
		const num2 = nums2[j];

		if (num1 < num2) i++;
		else if (num2 < num1) j++;
		else {
			uniqueNums.add(num1);
			i++;
			j++;
		}
	}

	return [...uniqueNums];
}

console.log('---------');
console.log(intersectionV2([1, 2, 2, 1], [2, 2]));
console.log(intersectionV2([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersectionV2([6, 2, 5], [1, 2, 10, 6, 11, 5]));

// Binary search
function intersectionV3(nums1, nums2) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	const uniqueNums = new Set();

	for (let i = 0; i < nums1.length; i++) {
		const target = nums1[i];
		if (numExists(nums2, target)) uniqueNums.add(target);
	}

	return [...uniqueNums];

	function numExists(arr, target) {
		let start = 0;
		let end = arr.length - 1;

		while (start <= end) {
			const middleIndex = Math.floor((end - start) / 2) + start;
			if (arr[middleIndex] === target) return true;
			else if (arr[middleIndex] < target) start = middleIndex + 1;
			else end = middleIndex - 1;
		}

		return false;
	}
}

console.log('---------');
console.log(intersectionV3([1, 2, 2, 1], [2, 2]));
console.log(intersectionV3([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersectionV3([6, 2, 5], [1, 2, 10, 6, 11, 5]));
