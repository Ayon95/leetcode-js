/*
Two pointers
- create an array from the input string
- use two pointers to start from the edges and move inward
- keep looping as long as left pointer is less than right pointer
- compare characters from the two edges of the string
- if both characters are English letters, then swap their places
    - increment left pointer and decrement right pointer
- if character at left pointer is not a letter, then increment left pointer
	- since it is not a letter, it needs to stay in the same place
	- go to the next character
- if character at right pointer is not a letter, then decrement left pointer
	- go to the next character since we can only swap an English letter
- O(n) time complexity
- O(n) space complexity 
*/

// Two pointers (using regex)
function reverseOnlyLettersV1(str) {
	if (str.length === 1) return str;

	const chars = str.split('');
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		const leftCharIsEngLetter = /[a-z]/i.test(chars[left]);
		const rightCharIsEngLetter = /[a-z]/i.test(chars[right]);

		if (!leftCharIsEngLetter) {
			left++;
			continue;
		}

		if (!rightCharIsEngLetter) {
			right--;
			continue;
		}

		const temp = chars[left];
		chars[left] = chars[right];
		chars[right] = temp;
		left++;
		right--;
	}

	return chars.join('');
}

console.log(reverseOnlyLettersV1('ab-cd'));
console.log(reverseOnlyLettersV1('a-bC-dEf-ghIj'));
console.log(reverseOnlyLettersV1('Test1ng-Leet=code-Q!'));

// Two pointers (using UTF-16 character code)
function reverseOnlyLettersV2(str) {
	if (str.length === 1) return str;

	const chars = str.split('');
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		const leftCharIsEngLetter = isEnglishLetter(chars[left]);
		const rightCharIsEngLetter = isEnglishLetter(chars[right]);

		if (!leftCharIsEngLetter) {
			left++;
			continue;
		}

		if (!rightCharIsEngLetter) {
			right--;
			continue;
		}

		const temp = chars[left];
		chars[left] = chars[right];
		chars[right] = temp;
		left++;
		right--;
	}

	return chars.join('');

	// A - Z (65 - 90), a - z (97 - 122)
	function isEnglishLetter(char) {
		const charCode = char.charCodeAt(0);
		return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
	}
}

console.log('---------');
console.log(reverseOnlyLettersV2('ab-cd'));
console.log(reverseOnlyLettersV2('a-bC-dEf-ghIj'));
console.log(reverseOnlyLettersV2('Test1ng-Leet=code-Q!'));
