function quickSort(arr, start, end) {
	if (start >= end) return;

	const pivotIndex = partition(arr, start, end);

	quickSort(arr, start, pivotIndex - 1);
	quickSort(arr, pivotIndex + 1, end);
}

function partition(arr, start, end) {
	const pivot = arr[end];
	let pivotIndex = start;

	for (let i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			[arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
			pivotIndex++;
		}
	}

	[arr[pivotIndex], arr[end]] = [pivot, arr[pivotIndex]];

	return pivotIndex;
}

module.exports = quickSort;
