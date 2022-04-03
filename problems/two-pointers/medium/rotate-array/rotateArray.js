// Two pointers (reversing entire array and then individual portions)
function rotate(nums, k) {
	if (nums.length === 1) return;

	k = k % nums.length;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);

	console.log(nums);

	function reverse(arr, start, end) {
		while (start < end) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
			end--;
		}
	}
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
rotate([1, 2, 3, 4, 5], 7);
rotate([1, 2, 3, 4, 5], 15);
rotate([1, 2, 3, 4], 4);
rotate([1, 2], 3);

/*
Two pointers (using extra memory)
- O(n) time complexity
- O(n) space complexity
*/
function rotateV2(nums, k) {
	if (nums.length === 1) return nums;

	const numsRotated = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		numsRotated[(i + k) % nums.length] = num;
	}

	nums = numsRotated;
	console.log(nums);
}

console.log('---------');
rotateV2([1, 2, 3, 4, 5, 6, 7], 3);
rotateV2([-1, -100, 3, 99], 2);
rotateV2([1, 2, 3, 4, 5], 7);
rotateV2([1, 2, 3, 4, 5], 15);
rotateV2([1, 2, 3, 4], 4);
rotateV2([1, 2], 3);
