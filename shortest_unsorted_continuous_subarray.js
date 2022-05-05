// https://leetcode.com/problems/shortest-unsorted-continuous-subarray

// solution 1
// time complexity   => O(N)
// space complexity  => O(N )

let findUnsortedSubarray1 = (n) => {
  let len = n.length - 1, left = -1, right = -1, max = n[0], min = n[len];
  for (let i = 1; i <= len; i++) {
    let a = n[i], b = n[len - i];
    a < max ? (right = i) : (max = a);
    b > min ? (left = i) : (min = b);
  }
  return Math.max(0, left + right - len + 1);
};


// solution 2
// time complexity   => O(N log N)
// space complexity  => O(N)

let findUnsortedSubarray2 = (n) => {
  let stack = [];
  let sorted = [...n].sort((a, b) => a - b);
  for (i = 0; i < n.length; i++) {
    if (n[i] !== sorted[i]) stack.push(i);
  }
  return stack.length ? Math.max(...stack) - Math.min(...stack) + 1 : 0;
};
