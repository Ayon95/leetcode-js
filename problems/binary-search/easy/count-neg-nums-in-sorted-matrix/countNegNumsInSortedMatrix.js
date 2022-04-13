// Binary search
function countNegatives(matrix) {
	let count = 0;

	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];
		let start = 0;
		let end = row.length - 1;

		while (start <= end) {
			const middleIndex = Math.floor((end - start) / 2) + start;
			if (row[middleIndex] >= 0) start = middleIndex + 1;
			else if (row[middleIndex] < 0 && row[middleIndex - 1] < 0) end = middleIndex - 1;
			else {
				count += row.length - middleIndex;
				break;
			}
		}
	}

	return count;
}

console.log(
	countNegatives([
		[4, 3, 2, -1],
		[3, 2, 1, -1],
		[1, 1, -1, -2],
		[-1, -1, -2, -3],
	])
);

console.log(
	countNegatives([
		[3, 2],
		[1, 0],
	])
);

// Two pointers
function countNegativesV2(matrix) {
	let j = 0;
	let count = 0;

	for (let i = matrix.length - 1; i >= 0; i--) {
		const row = matrix[i];

		while (j < row.length) {
			if (row[j] < 0) {
				count += row.length - j;
				break;
			}

			j++;
		}
	}

	return count;
}

console.log('---------');

console.log(
	countNegativesV2([
		[4, 3, 2, -1],
		[3, 2, 1, -1],
		[1, 1, -1, -2],
		[-1, -1, -2, -3],
	])
);

console.log(
	countNegativesV2([
		[3, 2],
		[1, 0],
	])
);

/*
Brute force
- O(mn) time complexity
- O(1) space complexity
*/
function countNegativesV3(matrix) {
	let count = 0;

	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];
		for (let j = 0; j < row.length; j++) {
			if (row[j] < 0) {
				count += row.length - j;
				break;
			}
		}
	}

	return count;
}

console.log('---------');

console.log(
	countNegativesV3([
		[4, 3, 2, -1],
		[3, 2, 1, -1],
		[1, 1, -1, -2],
		[-1, -1, -2, -3],
	])
);

console.log(
	countNegativesV3([
		[3, 2],
		[1, 0],
	])
);
