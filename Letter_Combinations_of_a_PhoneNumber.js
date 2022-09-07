/**
 * @param {string} digits
 * @return {string[]}
 */

let mapOfNumbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

// triple loop
let letterCombinations = (digits) => {
  if (!digits.length) return [];

  let lastDigitCompinations = [""];

  for (let i = 0; i < digits.length; i++) {
    let newPossibilities = [];

    for (let x = 0; x < lastDigitCompinations.length; x++) {
      for (let letter of mapOfNumbers[digits[i]]) {
        newPossibilities.push(lastDigitCompinations[x].concat(letter));
      }
    }

    if (i == digits.length - 1) return newPossibilities;

    lastDigitCompinations = newPossibilities;
  }
};

// recursion
let letterCombinations_Rec = (digits) => {
  if (!digits.length) return [];

  let getLetterCompinations = (digits, prevCompinations) => {
    let newPossibilities = [];

    for (let prevCompination of prevCompinations) {
      for (let letter of mapOfNumbers[digits[0]]) {
        newPossibilities.push(prevCompination.concat(letter));
      }
    }

    return digits.length > 1
      ? getLetterCompinations(digits.slice(1), newPossibilities)
      : newPossibilities;
  };

  return getLetterCompinations(digits, [""]);
};
