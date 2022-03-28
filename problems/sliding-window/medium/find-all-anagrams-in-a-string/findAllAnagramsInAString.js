// Sliding window (intuitive, less-optimized version)
function findAnagrams(str, p) {
	if (p.length > str.length) return [];

	const pFrequencies = {};
	const windowFrequencies = {};
	const result = [];
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		windowFrequencies[char] = windowFrequencies[char] ? windowFrequencies[char] + 1 : 1;

		if (i < p.length) {
			const char = p[i];
			pFrequencies[char] = pFrequencies[char] ? pFrequencies[char] + 1 : 1;
		}

		if (i >= p.length - 1) {
			let isAnagram = true;

			for (let j = start; j < start + p.length; j++) {
				const char = str[j];
				if (pFrequencies[char] !== windowFrequencies[char]) {
					isAnagram = false;
					break;
				}
			}

			if (isAnagram) result.push(start);

			// shift window to right
			windowFrequencies[str[start]]--;
			start++;
		}
	}

	return result;
}

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abcaabcaba', 'aab'));
console.log(findAnagrams('abab', 'ab'));
console.log(findAnagrams('aaaa', 'a'));

// Sliding window (more optimized version)
function findAnagramsV2(str, p) {
	if (p.length > str.length) return [];

	const pFrequencies = {};
	const result = [];
	let start = 0;
	let lettersNeeded = p.length;

	for (let i = 0; i < p.length; i++) {
		const letter = p[i];
		pFrequencies[letter] = pFrequencies[letter] ? pFrequencies[letter] + 1 : 1;
	}

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];

		if (pFrequencies[letter] !== undefined) pFrequencies[letter]--;
		if (pFrequencies[letter] >= 0) lettersNeeded--;

		if (i >= p.length - 1) {
			const startLetter = str[start];
			if (lettersNeeded === 0) result.push(start);
			// shift the window to the right
			if (pFrequencies[startLetter] !== undefined) pFrequencies[startLetter]++;
			if (pFrequencies[startLetter] > 0) lettersNeeded++;
			start++;
		}
	}

	return result;
}

console.log('----------');
console.log(findAnagramsV2('cbaebabacd', 'abc'));
console.log(findAnagramsV2('abcaabcaba', 'aab'));
console.log(findAnagramsV2('abab', 'ab'));
console.log(findAnagramsV2('aaaa', 'a'));
