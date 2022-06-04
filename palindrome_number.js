// https://leetcode.com/problems/palindrome-number/

// solution 1 - convert to a string and compare with outside in strategy
let isPalindrome = x => {
    let s = String(x), l = 0, r = s.length - 1;
    while(l<r) {
        if(s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}


// solution 2 - get a reverted number and compare it with the original
// 1221 % 10               -> get the last digit 1
// Math.floor(1221 / 10)   -> remove the last digit 

let isPalindrome2 = function(x) {
    if (x < 0) return false;
    let num = x, res = 0;
    while (num !== 0) {
      res = (res * 10) + (num % 10); // if we multiply the last digit by 10 and add the second last digit, it gives us the reverted number.
      num = Math.floor(num / 10);
    }
    return res === x;
  };

console.log(isPalindrome(1221))