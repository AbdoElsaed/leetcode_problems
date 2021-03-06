// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */

let getPalindrome = (left, right, s) => {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
};

let longestPalindrome = function (s) {
  let max = [0, 1];

  for (let i = 0; i < s.length; i++) {
    let even = getPalindrome(i - 1, i, s);
    let odd = getPalindrome(i - 1, i + 1, s);
    let currMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd;

    max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
  }

  return s.slice(max[0], max[1]);
};
