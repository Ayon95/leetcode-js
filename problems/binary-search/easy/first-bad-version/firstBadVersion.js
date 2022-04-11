// Binary search
function firstBadVersion(n) {
	let start = 0;
	let end = n;

	while (start <= end) {
		const middle = Math.floor((end - start) / 2) + start;
		if (!isBadVersion(middle)) start = middle + 1;
		else if (isBadVersion(middle) && isBadVersion(middle - 1)) end = middle - 1;
		else return middle;
	}
}

// This function will be provided by the creators of the problem
/**
 * returns a boolean indicating whether or not a version is bad
 *
 * @param {integer} version number
 * @return {boolean}
 * isBadVersion = function(version) {
 *     ...
 * };
 */
function isBadVersion(version) {}
