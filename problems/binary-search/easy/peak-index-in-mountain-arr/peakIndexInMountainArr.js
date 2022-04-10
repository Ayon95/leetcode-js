// Binary search
function peakIndexInMountainArray(arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		const middleIndex = Math.floor((end - start) / 2) + start;
		if (arr[middleIndex - 1] > arr[middleIndex]) {
			end = middleIndex - 1;
		} else if (arr[middleIndex + 1] > arr[middleIndex]) {
			start = middleIndex + 1;
		} else {
			return middleIndex;
		}
	}
}

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([0, 1, 2, 3, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 5, 1, 0]));
console.log(peakIndexInMountainArray([0, 1, 5, 4, 3, 2, 1, 0]));

// Linear search
function peakIndexInMountainArrayV2(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] < arr[i]) return i;
	}
}

console.log('---------');
console.log(peakIndexInMountainArrayV2([0, 1, 0]));
console.log(peakIndexInMountainArrayV2([0, 2, 1, 0]));
console.log(peakIndexInMountainArrayV2([0, 10, 5, 2]));
console.log(peakIndexInMountainArrayV2([0, 1, 2, 3, 2, 1, 0]));
console.log(peakIndexInMountainArrayV2([0, 1, 2, 3, 4, 5, 1, 0]));
console.log(peakIndexInMountainArrayV2([0, 1, 5, 4, 3, 2, 1, 0]));
