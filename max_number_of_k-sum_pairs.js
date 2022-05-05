// https://leetcode.com/problems/max-number-of-k-sum-pairs/

// Bruteforce approach
// Time Complexity: BigO(N^2)
// Space Complexity: BigO(1)

let maxOperations1 = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == -1) continue;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] == -1) continue;
      if (nums[i] + nums[j] == k) {
        count++;
        nums[i] = -1;
        nums[j] = -1;
        break;
      }
    }
  }
  return count;
};

console.log(maxOperations1([1, 2, 3, 4], 5));

// ----------------------------------------------------------------------------

// two poiters approach
// Time Complexity: BigO(N*log N)
// Space Complexity: BigO(1)

let maxOperations2 = (nums, k) => {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let result = 0;

  while (left < right) {
    if (nums[left] + nums[right] < k) left++;
    else if (nums[left] + nums[right] > k) right--;
    else left++, right--, result++;
  }

  return result;
};

console.log(maxOperations2([1, 2, 3, 4], 5))


// ----------------------------------------------------------------------------

// Map hashing approach
// Time Complexity: BigO(N)
// Space Complexity: BigO(N)

let maxOperations3 = (nums, k) => {
  let m = new Map();
  let result = 0;

  nums.forEach((i) => {
    // Decrement its frequency in m and increment the result by 1
    if (m.has(i) && m.get(i) > 0) {
      m.set(i, m.get(i) - 1);
      result++;
    }

    // Increment its frequency by 1 // if it is already present in m. // Otherwise, set its frequency to 1
    else {
      if (m.has(k - i)) m.set(k - i, m.get(k - i) + 1);
      else m.set(k - i, 1);
    }
  });
  return result;
};
console.log(maxOperations3([1, 2, 3, 4], 5))
