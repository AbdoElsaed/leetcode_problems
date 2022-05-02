// https://leetcode.com/problems/backspace-string-compare/

const buildString = (s) => {
  let stack = [];
  for (let c of s) {
    if (c !== "#") stack.push(c);
    else stack.pop();
  }
  console.log(stack.join(''))
  return stack.join('')
};

const backspaceCompare = (s, t) => buildString(s) === buildString(t);

console.log(backspaceCompare("a#c", "b"));
