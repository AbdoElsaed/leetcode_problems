// https://leetcode.com/problems/container-with-most-water/

let maxArea = (height) => {
	let i = 0, j = height.length - 1, result = 0;
	while(i < j) {
		result = Math.max(result, Math.min(height[i], height[j]) * ( j - i))
		height[i] < height[j] ? i++ : j--;
	}
	return result;
}

console.log(maxArea([4, 3, 2, 1, 4]))
