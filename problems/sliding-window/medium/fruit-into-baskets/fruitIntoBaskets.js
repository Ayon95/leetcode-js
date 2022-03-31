// Sliding window
function totalFruit(fruits) {
	if (fruits.length === 1) return 1;

	let pickedFruitsCount = 0;
	let pickedFruitsMaxCount = 0;
	let uniqueFruitsCount = 0;
	let start = 0;
	const fruitFrequencies = {};

	for (let i = 0; i < fruits.length; i++) {
		const fruit = fruits[i];

		if (!fruitFrequencies[fruit]) {
			fruitFrequencies[fruit] = 1;
			uniqueFruitsCount++;
		} else {
			fruitFrequencies[fruit]++;
		}

		while (uniqueFruitsCount > 2) {
			const startFruit = fruits[start];
			// shrink the window
			fruitFrequencies[startFruit]--;
			pickedFruitsCount--;
			if (fruitFrequencies[startFruit] === 0) uniqueFruitsCount--;
			start++;
		}

		pickedFruitsCount++;
		pickedFruitsMaxCount = Math.max(pickedFruitsMaxCount, pickedFruitsCount);
	}

	return pickedFruitsMaxCount;
}

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([0, 0, 0, 1, 2, 2]));
console.log(totalFruit([1]));

/*
Sliding window (using a built-in map)
- O(n) time complexity
- O(1) space complexity
    - the map will contain at most three types of fruits
*/

function totalFruitV2(fruits) {
	if (fruits.length === 1) return 1;

	let start = 0;
	let pickedFruitsMaxCount = 0;
	const fruitFrequencies = new Map();

	for (let i = 0; i < fruits.length; i++) {
		const fruit = fruits[i];

		if (fruitFrequencies.has(fruit)) {
			fruitFrequencies.set(fruit, fruitFrequencies.get(fruit) + 1);
		} else fruitFrequencies.set(fruit, 1);

		while (fruitFrequencies.size > 2) {
			const startFruit = fruits[start];
			fruitFrequencies.set(startFruit, fruitFrequencies.get(startFruit) - 1);
			if (fruitFrequencies.get(startFruit) === 0) fruitFrequencies.delete(startFruit);
			start++;
		}

		const pickedFruitsCount = i - start + 1;
		pickedFruitsMaxCount = Math.max(pickedFruitsMaxCount, pickedFruitsCount);
	}

	return pickedFruitsMaxCount;
}

console.log('---------');
console.log(totalFruitV2([1, 2, 1]));
console.log(totalFruitV2([0, 1, 2, 2]));
console.log(totalFruitV2([0, 0, 0, 1, 2, 2]));
console.log(totalFruitV2([1]));
