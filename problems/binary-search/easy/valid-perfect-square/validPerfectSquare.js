// Binary search
function isPerfectSquare(num) {
	if (num < 2) return true;

	let start = 0;
	let end = num;

	while (start <= end) {
		const middleNum = Math.floor((end - start) / 2) + start;
		if (middleNum * middleNum === num) return true;
		if (middleNum * middleNum > num) end = middleNum - 1;
		else start = middleNum + 1;
	}

	return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));

/*
Approach 2 (using exponentiation operator)
- store the result of input number raised to the power 0.5
- compare that result with the floor of num ** 0.5
- if they are the same, then the number is a perfect square
*/
function isPerfectSquareV2(num) {
	const squareRoot = num ** 0.5;
	return squareRoot === Math.floor(num ** 0.5);
}

console.log('--------');
console.log(isPerfectSquareV2(16));
console.log(isPerfectSquareV2(9));
console.log(isPerfectSquareV2(14));
console.log(isPerfectSquareV2(1));
console.log(isPerfectSquareV2(2));
