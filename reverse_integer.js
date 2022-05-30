// https://leetcode.com/problems/reverse-integer/

let reverse = (x) => {
  let reversedX = +String(Math.abs(x)).split("").reverse().join("");
  return reversedX > 0x7FFFFFFF ? 0 : x < 0 ? -reversedX : reversedX;
};

console.log(reverse(-123));
