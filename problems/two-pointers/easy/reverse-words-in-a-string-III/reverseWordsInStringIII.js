// Two pointers (first approach)
function reverseWords(str) {
	const chars = str.split('');
	const emptySpaceIndices = [];

	for (let i = 0; i < chars.length; i++) {
		if (chars[i] === ' ') emptySpaceIndices.push(i);
	}

	let emptySpacePointer = 0;
	let endCharIndex = emptySpaceIndices.length === 0 ? chars.length - 1 : emptySpaceIndices[0] - 1;

	for (let i = 0; i < chars.length; i++) {
		const char = chars[i];

		if (char === ' ') {
			// go to the next empty space only if there is any
			if (emptySpacePointer < emptySpaceIndices.length - 1) {
				emptySpacePointer++;
				endCharIndex = emptySpaceIndices[emptySpacePointer] - 1;
			} else {
				endCharIndex = chars.length - 1;
			}

			continue;
		}

		if (i < endCharIndex) {
			chars[i] = chars[endCharIndex];
			chars[endCharIndex] = char;
			endCharIndex--;
		}
	}

	return chars.join('');
}

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));
console.log(reverseWords('Hello'));

// Two pointers (second approach)
function reverseWordsV2(str) {
	const words = str.split(' ');

	for (let i = 0; i < words.length; i++) {
		const wordChars = words[i].split('');
		let left = 0;
		let right = wordChars.length - 1;

		while (left < right) {
			const temp = wordChars[left];
			wordChars[left] = wordChars[right];
			wordChars[right] = temp;
			left++;
			right--;
		}

		words[i] = wordChars.join('');
	}

	return words.join(' ');
}

console.log('----------');
console.log(reverseWordsV2("Let's take LeetCode contest"));
console.log(reverseWordsV2('God Ding'));
console.log(reverseWordsV2('Hello'));
