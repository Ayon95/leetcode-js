// Sliding window
function countGoodSubstrings(str) {
	const substrSize = 3;

	if (str.length < substrSize) return 0;

	let count = 0;
	let uniqueLetterCount = 0;
	const frequencies = {};

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];

		if (frequencies[letter]) {
			frequencies[letter]++;
		} else {
			frequencies[letter] = 1;
			uniqueLetterCount++;
		}

		if (i >= substrSize - 1) {
			if (uniqueLetterCount === 3) count++;
			// shift the window to the right (need to adjust frequency of substring's first letter and unique-letter count)
			const firstLetterOfSubstr = str[i - (substrSize - 1)];
			if (frequencies[firstLetterOfSubstr] > 1) {
				frequencies[firstLetterOfSubstr]--;
			} else {
				delete frequencies[firstLetterOfSubstr];
				uniqueLetterCount--;
			}
		}
	}

	return count;
}

console.log(countGoodSubstrings('xyzzaz'));
console.log(countGoodSubstrings('aababcabc'));

// Brute force
function countGoodSubstringsV2(str) {
	if (str.length < 3) return 0;

	let count = 0;

	for (let i = 0; i <= str.length - 3; i++) {
		let uniqueCharacters = new Set();

		for (let j = i; j < i + 3; j++) {
			uniqueCharacters.add(str[j]);
		}

		if (uniqueCharacters.size === 3) count++;
	}

	return count;
}

console.log('-----------');
console.log(countGoodSubstringsV2('xyzzaz'));
console.log(countGoodSubstringsV2('aababcabc'));

/*
Simple approach based on substring length of 3

*/
function countGoodSubstringsV3(str) {
	if (str.length < 3) return 0;

	let count = 0;

	for (let i = 0; i <= str.length - 3; i++) {
		if (str[i] !== str[i + 1] && str[i + 1] !== str[i + 2] && str[i] !== str[i + 2]) {
			count++;
		}
	}

	return count;
}

console.log('-----------');
console.log(countGoodSubstringsV3('xyzzaz'));
console.log(countGoodSubstringsV3('aababcabc'));
