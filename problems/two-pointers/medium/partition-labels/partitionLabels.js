// Two pointers
function partitionLabels(str) {
	if (str.length === 1) return [1];

	const partitionSizes = [];
	const lastOccurrenceIndices = {};
	let start = 0;
	let farthestLastOccurrenceIndex = 0;

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		lastOccurrenceIndices[letter] = i;
	}

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		const lastOccurrenceIndex = lastOccurrenceIndices[letter];
		farthestLastOccurrenceIndex = Math.max(farthestLastOccurrenceIndex, lastOccurrenceIndex);

		if (i === farthestLastOccurrenceIndex) {
			partitionSizes.push(i - start + 1);
			start = i + 1;
			farthestLastOccurrenceIndex = 0;
		}
	}

	return partitionSizes;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('eccbbbbdec'));
console.log(partitionLabels('abcazdghidklml'));
console.log(partitionLabels('abcdef'));
console.log(partitionLabels('a'));
