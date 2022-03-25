// Sliding window
function lengthOfLongestSubstring(str) {
	if (str.length < 2) {
		return str.length === 0 ? 0 : 1;
	}

	let maxLength = 0;
	let currentLength = 0;
	let start = 0;
	let frequencies = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (frequencies[char]) frequencies[char]++;
		else frequencies[char] = 1;

		currentLength++;

		while (frequencies[char] > 1) {
			const startChar = str[start];
			// shrink the window
			if (frequencies[startChar] > 1) frequencies[startChar]--;
			else delete frequencies[startChar];
			start++;
			currentLength--;
		}

		maxLength = Math.max(maxLength, currentLength);
	}

	return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('a'));
console.log(lengthOfLongestSubstring('abcdefg'));
console.log(lengthOfLongestSubstring('aab'));
