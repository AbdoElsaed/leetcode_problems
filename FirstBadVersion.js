// https://leetcode.com/problems/first-bad-version/

const isBadVersion = (e) => {
  return [4].includes(e) ? true : false;
};

const FBV = (n) => {
  let left = 1;
  let right = n;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isBadVersion(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(FBV(5));
