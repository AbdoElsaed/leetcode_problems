// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// solution #1: Double-loop with a Set
let longestSubstring = (s) => {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let currentStringSet = new Set();
    for (let j = i; j < s.length; j++) {
      if (currentStringSet.has(s[j])) break;
      currentStringSet.add(s[j]);
    }

    res = Math.max(res, currentStringSet.size);
  }
  return res;
};

// Solution #2 : Array
let longestSubstring2 = (s) => {
  let currentString = [];
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let currentCharacterPosition = currentString.indexOf(s[i]);
    if (currentCharacterPosition !== -1) {
      currentString.splice(0, currentCharacterPosition + 1);
    }
    currentString.push(s[i]);

    res = Math.max(res, currentString.length);
  }
  return res;
};
