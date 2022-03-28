/*
Sliding window

*/

function checkInclusion(str1, str2) {
	if (str1.length > str2.length) return false;

	let start = 0;
	let lettersNeeded = str1.length;
	const str1Frequencies = {};

	for (let i = 0; i < str1.length; i++) {
		const letter = str1[i];
		str1Frequencies[letter] = str1Frequencies[letter] ? str1Frequencies[letter] + 1 : 1;
	}

	for (let i = 0; i < str2.length; i++) {
		const letter = str2[i];

		if (str1Frequencies[letter] !== undefined) str1Frequencies[letter]--;
		if (str1Frequencies[letter] >= 0) lettersNeeded--;

		if (i >= str1.length - 1) {
			const startLetter = str2[start];
			if (lettersNeeded === 0) return true;
			// shift window to the right
			if (str1Frequencies[startLetter] !== undefined) str1Frequencies[startLetter]++;
			if (str1Frequencies[startLetter] > 0) lettersNeeded++;
			start++;
		}
	}

	return false;
}

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
