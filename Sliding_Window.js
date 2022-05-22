// solution #1 : brute force - nested loop
// Big O(N^2) || O(N*K)
let maxSum1 = (list, k) => {
  if (k > list.length) {
    return null;
  }
  let maxSum = -Infinity;

  for (let i = 0; i < list.length - k + 1; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum += list[i + j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// Solution #2 : Sliding Window
// Big O(N)

let maxSum2 = (list, k) => {
  if (k > list.length) {
    return null;
  }

  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += list[i];
  }
  maxSum = windowSum;

  for (let i = k; i < list.length; i++) {
    windowSum -= list[i - k] + list[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
};

// Solution #3 : Sliding Window
// Big O(N)
let maxSubArraySum = (nums, size) => {
  if (size < 0 || size > nums.length) return null;

  let currSum = 0;
  let maxSumSeen = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (i >= size - 1) {
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum -= nums[i - (size - 1)];
    }
  }
  return maxSumSeen;
};

console.log(maxSum1([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
