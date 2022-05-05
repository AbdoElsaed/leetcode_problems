// https://leetcode.com/problems/two-sum/

// hash table approach
// Time complexity BigO(N)
// Space complexity BigO(N)

// ----------------------- solution 1 ------------------------
let twoSum1 = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (obj.hasOwnProperty(complement)) {
      return [obj[complement], i];
    }
    obj[nums[i]] = i;
  }
  return null;
};

// ----------------------- solution 2 ------------------------
let twoSum2 = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] != null) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
return null
};