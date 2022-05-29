// https://duncan-mcardle.medium.com/leetcode-problem-6-zigzag-conversion-javascript-507d812a0620

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;

  let currentRow = 1;
  let headingDown = true;
  let zegzagArray = [];

  for (let i = 0; i < numRows; i++) {
    zegzagArray[i] = [];
  }

  for (let i = 0; i < s.length; i++) {
    zegzagArray[currentRow - 1].push(s[i]);

    if (headingDown) {
      currentRow++;

      if (currentRow > numRows) {
        currentRow = numRows - 1;
        headingDown = false;
      }
    } else {
      currentRow--;

      if (currentRow < 1) {
        currentRow = 2;
        headingDown = true;
      }
    }
  }

  let result = "";

  for (let i = 0; i < numRows; i++) {
    result += zegzagArray[i].join("");
  }

  return result;
};
