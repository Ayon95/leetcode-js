// Sliding window
function longestSubstrLength(str, k) {
	if (k > str.length) return 0;

	let start = 0;
	let uniqueCharsCount = 0;
	let maxLength = 0;
	const charFrequencies = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (charFrequencies[char]) {
			charFrequencies[char]++;
		} else {
			charFrequencies[char] = 1;
			uniqueCharsCount++;
		}

		while (uniqueCharsCount > k) {
			const startChar = str[start];
			charFrequencies[startChar]--;

			if (charFrequencies[startChar] === 0) {
				delete charFrequencies[startChar];
				uniqueCharsCount--;
			}

			start++;
		}

		if (uniqueCharsCount === k) maxLength = Math.max(maxLength, i - start + 1);
	}

	return maxLength;
}

console.log(longestSubstrLength('aabbcc', 1));
console.log(longestSubstrLength('aabbcc', 2));
console.log(longestSubstrLength('aabbcc', 3));
console.log(longestSubstrLength('abcdef', 6));
console.log(longestSubstrLength('aab', 3));
console.log(longestSubstrLength('abc', 4));
