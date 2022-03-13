/*
- Use two pointers to swap characters from two ends of the array
- At the end of each iteration, increment left pointer and decrement right pointer
- Keep running the loop until left crosses right or left is equal to right
- O(n/2) ~ O(n) time complexity
- O(1) space complexity
*/

function reverseString(characters) {
	if (characters.length === 1) return characters;

	let left = 0;
	let right = characters.length - 1;

	while (left < right) {
		const temp = characters[left];
		characters[left] = characters[right];
		characters[right] = temp;
		// Alternative way using destructuring
		// [characters[left], characters[right]] = [characters[right], characters[left]];
		left++;
		right--;
	}

	console.log(characters);
}

reverseString(['h', 'e', 'l', 'l', 'o']);
reverseString(['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']);
reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
