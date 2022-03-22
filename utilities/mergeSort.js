function mergeSort(arr) {
	if (arr.length < 2) return arr;

	const midPoint = Math.floor(arr.length / 2);

	let leftSubarr = [];
	let rightSubarr = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < midPoint) {
			leftSubarr.push(arr[i]);
		} else {
			rightSubarr.push(arr[i]);
		}
	}

	const sortedLeftSubarr = mergeSort(leftSubarr);
	const sortedRightSubarr = mergeSort(rightSubarr);

	return merge(sortedLeftSubarr, sortedRightSubarr);
}

function merge(arr1, arr2) {
	const mergedArr = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length || j < arr2.length) {
		const num1 = arr1[i];
		const num2 = arr2[j];

		if (i >= arr1.length) {
			mergedArr.push(num2);
			j++;
			continue;
		}

		if (j >= arr2.length) {
			mergedArr.push(num1);
			i++;
			continue;
		}

		if (num1 <= num2) {
			mergedArr.push(num1);
			i++;
		} else {
			mergedArr.push(num2);
			j++;
		}
	}

	return mergedArr;
}

module.exports = mergeSort;
