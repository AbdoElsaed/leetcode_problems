/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// solution 1
let removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }
  return j;
};

// solution 2
let removeElement2 = (nums, val) => {
  nums = nums.filter((i) => i !== val);
  return nums.length;
};

removeElement([3, 2, 2, 3], 3);
