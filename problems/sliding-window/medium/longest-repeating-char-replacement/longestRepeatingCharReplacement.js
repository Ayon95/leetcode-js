// Sliding window
function characterReplacement(str, k) {
	if (str.length === 1) return 1;

	let maxLength = 0;
	let start = 0;
	const frequencies = {};

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		let windowLength = i - start + 1;
		frequencies[letter] = frequencies[letter] ? frequencies[letter] + 1 : 1;

		// shrink the window until it becomes a valid substring again
		while (windowLength - getCountOfMostFrequentLetter() > k) {
			frequencies[str[start]]--;
			windowLength--;
			start++;
		}

		maxLength = Math.max(maxLength, windowLength);
	}

	return maxLength;

	function getCountOfMostFrequentLetter() {
		let count = 0;
		for (letter in frequencies) {
			count = Math.max(count, frequencies[letter]);
		}
		return count;
	}
}

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
console.log(characterReplacement('ABBCAB', 2));
console.log(characterReplacement('BBA', 1));
console.log(characterReplacement('A', 1));
console.log(characterReplacement('AAABAB', 2));
console.log(characterReplacement('ABBB', 1));

// Sliding window (more optimal version)
function characterReplacementV2(str, k) {
	if (str.length === 1) return 1;

	let maxLength = 0;
	let maxFrequency = 0;
	let start = 0;
	let frequencies = {};

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		let windowLength = i - start + 1;

		frequencies[letter] = frequencies[letter] ? frequencies[letter] + 1 : 1;
		maxFrequency = Math.max(maxFrequency, frequencies[letter]);
		// since this while loop will run once only, you can also use an if-statement instead
		// windowLength - maxFrequency can be k + 1 at most
		while (windowLength - maxFrequency > k) {
			frequencies[str[start]]--;
			windowLength--;
			start++;
		}

		maxLength = Math.max(maxLength, windowLength);
	}

	return maxLength;
}

console.log('---------');
console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
console.log(characterReplacement('ABBCAB', 2));
console.log(characterReplacement('BBA', 1));
console.log(characterReplacement('A', 1));
console.log(characterReplacement('AAABAB', 2));
console.log(characterReplacement('ABBB', 1));
