/*
Two pointers
*/

function intervalIntersection(firstList, secondList) {
	if (firstList.length === 0 || secondList.length === 0) return [];

	let i = 0;
	let j = 0;
	const intersections = [];

	while (i < firstList.length && j < secondList.length) {
		const interval1 = firstList[i];
		const interval2 = secondList[j];

		if (interval1[0] <= interval2[1] && interval1[1] >= interval2[0]) {
			intersections.push([
				Math.max(interval1[0], interval2[0]),
				Math.min(interval1[1], interval2[1]),
			]);
		}

		if (interval1[1] < interval2[1]) i++;
		else if (interval1[1] > interval2[1]) j++;
		else {
			i++;
			j++;
		}
	}

	return intersections;
}

console.log(
	intervalIntersection(
		[
			[0, 2],
			[5, 10],
			[13, 23],
			[24, 25],
		],
		[
			[1, 5],
			[8, 12],
			[15, 24],
			[25, 26],
		]
	)
);

console.log(
	intervalIntersection(
		[
			[1, 3],
			[5, 9],
		],
		[]
	)
);

console.log(intervalIntersection([[3, 10]], [[5, 10]]));
console.log(intervalIntersection([[5, 10]], [[5, 10]]));
