// Two pointers (first approach)
function reversePrefix(word, char) {
	if (word.length === 1) return word;

	let end;

	for (let i = 0; i < word.length; i++) {
		if (word[i] === char) {
			end = i;
			break;
		}
	}

	if (end === undefined) return word;

	const chars = word.split('');
	let start = 0;

	while (start < end) {
		// swapping using ES6 array destructuring
		[chars[start], chars[end]] = [chars[end], chars[start]];
		start++;
		end--;
	}

	return chars.join('');
}

console.log(reversePrefix('abcdefd', 'd'));
console.log(reversePrefix('xyxzxe', 'z'));
console.log(reversePrefix('abcd', 'z'));

// Two pointers (second approach)
function reversePrefixV2(word, char) {
	if (word.length === 1) return word;

	let end;

	for (let i = 0; i < word.length; i++) {
		if (word[i] === char) {
			end = i;
			break;
		}
	}

	if (end === undefined) return word;

	let reversedString = '';

	for (let i = 0; i < word.length; i++) {
		if (end >= 0) {
			reversedString += word[end];
			end--;
		} else {
			reversedString += word[i];
		}
	}

	return reversedString;
}

console.log('---------');
console.log(reversePrefixV2('abcdefd', 'd'));
console.log(reversePrefixV2('xyxzxe', 'z'));
console.log(reversePrefixV2('abcd', 'z'));
