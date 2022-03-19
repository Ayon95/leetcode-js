// Two pointers
function mergeStringsAlternately(word1, word2) {
	if (word1.length === 1 && word2.length === 1) {
		return `${word1[0]}${word2[0]}`;
	}

	let mergedString = '';
	let i = 0;
	let j = 0;

	while (i < word1.length || j < word2.length) {
		if (i < word1.length) {
			mergedString += word1[i];
			i++;
		}

		if (j < word2.length) {
			mergedString += word2[j];
			j++;
		}
	}

	return mergedString;
}

console.log(mergeStringsAlternately('abc', 'pqr'));
console.log(mergeStringsAlternately('ab', 'pqrs'));
console.log(mergeStringsAlternately('abcd', 'pq'));
console.log(mergeStringsAlternately('a', 'p'));
