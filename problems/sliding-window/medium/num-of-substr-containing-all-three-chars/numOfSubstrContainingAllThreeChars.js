// Sliding window
function numberOfSubstrings(str) {
	const frequencies = {
		a: 0,
		b: 0,
		c: 0,
	};
	let start = 0;
	let substringCount = 0;

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		frequencies[letter]++;
		// keep shrinking the window as long as it contains a valid substring
		while (frequencies['a'] >= 1 && frequencies['b'] >= 1 && frequencies['c'] >= 1) {
			const startLetter = str[start];
			frequencies[startLetter]--;
			start++;
		}

		substringCount += start;
	}

	return substringCount;
}

console.log(numberOfSubstrings('abcabc'));
console.log(numberOfSubstrings('aaacb'));
console.log(numberOfSubstrings('abc'));

/* Sliding window (approach 2)

*/

function numberOfSubstringsV2(str) {
	const frequencies = {
		a: 0,
		b: 0,
		c: 0,
	};
	let start = 0;
	let substringCount = 0;

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		frequencies[letter]++;

		while (frequencies['a'] >= 1 && frequencies['b'] >= 1 && frequencies['c'] >= 1) {
			substringCount += str.length - i;
			const startLetter = str[start];
			// shrink the window
			frequencies[startLetter]--;
			start++;
		}
	}

	return substringCount;
}

console.log('----------');
console.log(numberOfSubstringsV2('abcabc'));
console.log(numberOfSubstringsV2('aaacb'));
console.log(numberOfSubstringsV2('abc'));
