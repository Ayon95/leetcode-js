// Two pointers (caching indices of character occurrences)
function shortestToChar(str, char) {
	if (str.length === 1) return [0];

	const charOccurrenceIndices = [];
	const result = [];
	let j = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			charOccurrenceIndices.push(i);
		}
	}

	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			result.push(0);
			// making sure that j doesn't go out of bounds (go to the next occurrence only if there is any)
			if (j < charOccurrenceIndices.length - 1) j++;
			continue;
		}

		let shortestDistance = Math.abs(i - charOccurrenceIndices[j]);

		// We will only have letters between two occurrences when j is greater than 0
		if (j > 0) {
			const distanceToLeftOccurrence = Math.abs(i - charOccurrenceIndices[j - 1]);
			shortestDistance = Math.min(shortestDistance, distanceToLeftOccurrence);
		}

		result.push(shortestDistance);
	}

	return result;
}

console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaab', 'b'));
console.log(shortestToChar('aaba', 'b'));

// Two pointers (two passes in opposite directions)
function shortestToCharV2(str, char) {
	if (str.length === 1) return [0];

	let occurrencePointer = -str.length;
	const result = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			result[i] = 0;
			occurrencePointer = i;
			continue;
		}

		const distanceToLeftOccurrence = i - occurrencePointer;
		result[i] = distanceToLeftOccurrence;
	}

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === char) {
			occurrencePointer = i;
			continue;
		}

		const distanceToRightOccurrence = Math.abs(i - occurrencePointer);
		result[i] = Math.min(result[i], distanceToRightOccurrence);
	}

	return result;
}

console.log('-----------');
console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaab', 'b'));
console.log(shortestToChar('aaba', 'b'));

// Brute force
function shortestToCharV3(str, char) {
	if (str.length === 1) return [0];

	const charOccurrenceIndices = [];
	const result = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			charOccurrenceIndices.push(i);
		}
	}

	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			result.push(0);
			continue;
		}

		let smallestDifference = Math.abs(i - charOccurrenceIndices[0]);

		for (let j = 1; j < charOccurrenceIndices.length; j++) {
			const difference = Math.abs(i - charOccurrenceIndices[j]);
			smallestDifference = difference < smallestDifference ? difference : smallestDifference;
		}
		result.push(smallestDifference);
	}

	return result;
}

console.log('-----------');
console.log(shortestToCharV3('loveleetcode', 'e'));
console.log(shortestToCharV3('aaab', 'b'));
console.log(shortestToCharV3('aaba', 'b'));
