/*
Sliding window
- two strings are anagrams of each other if they have the same count for each letter
- the idea is to go through the input string and analyze each substring having the same length as string p
- so the window size will remain fixed
- compare the count of each letter in the substring (window) with that of each letter in string p
- use two hash maps to track the count of each letter in string p and window
- use a pointer to keep track of the starting point of the window
- O(m * n) time complexity
    - n is the length of the overall long string
    - m is the length of string p
- O(26) ~ O(1) space complexity
    - there can be at most 26 different English letters
*/

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
console.log(findAnagrams('abab', 'ab'));
