// Binary search
function nextGreatestLetter(letters, target) {
	let start = 0;
	let end = letters.length - 1;

	if (letters[end] <= target) return letters[start];

	while (start <= end) {
		const midIndex = Math.floor((end - start) / 2) + start;
		if (letters[midIndex] <= target) start = midIndex + 1;
		else if (letters[midIndex] > target && letters[midIndex - 1] > target) {
			end = midIndex - 1;
		} else return letters[midIndex];
	}
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd'));
console.log(nextGreatestLetter(['a', 'b', 'c'], 'd'));
