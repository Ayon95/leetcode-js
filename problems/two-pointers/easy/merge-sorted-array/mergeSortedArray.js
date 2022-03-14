/*
Important things to note
- one of the two arrays will have at least one number
- found out that the spread syntax doesn't work in the LeetCode code editor
*/

// Brute force (bubble sort)
function merge(nums1, m, nums2, n) {
	if (n === 0) {
		console.log(nums1);
		return;
	}

	let swaps = 0;
	let sortedElements = 0;

	for (let i = 0; i < nums2.length; i++) {
		nums1[m + i] = nums2[i];
	}

	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums1.length - sortedElements - 1; j++) {
			if (nums1[j] > nums1[j + 1]) {
				const temp = nums1[j];
				nums1[j] = nums1[j + 1];
				nums1[j + 1] = temp;
				swaps++;
			}
		}
		sortedElements++;
		if (swaps === 0) break;
		swaps = 0;
	}

	console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);

// Two pointers
function mergeBetter(nums1, m, nums2, n) {
	if (n === 0) {
		console.log(nums1);
		return;
	}

	let i = m - 1;
	let j = n - 1;

	for (let k = nums1.length - 1; k >= 0; k--) {
		if (nums1[i] > nums2[j] || j < 0) {
			nums1[k] = nums1[i];
			i--;
		} else if (nums1[i] <= nums2[j] || i < 0) {
			nums1[k] = nums2[j];
			j--;
		}
	}

	console.log(nums1);
}

console.log('----------');
mergeBetter([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
mergeBetter([1], 1, [], 0);
mergeBetter([0], 0, [1], 1);

// Two pointers (but a bit more efficient)
function mergeBest(nums1, m, nums2, n) {
	let insertPosition = nums1.length - 1;

	m--;
	n--;

	while (n >= 0) {
		if (m >= 0 && nums1[m] > nums2[n]) {
			nums1[insertPosition] = nums1[m];
			m--;
		} else {
			nums1[insertPosition] = nums2[n];
			n--;
		}

		insertPosition--;
	}

	console.log(nums1);
}

console.log('----------');
mergeBest([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
mergeBest([1], 1, [], 0);
mergeBest([0], 0, [1], 1);
