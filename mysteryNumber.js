let maxCount = (n, s, m) => {
  let result = [];
  let mapped = { 2: "5", 6: "9", 5: "2", 9: "6" };
  let nums = String(n).split("");
  let stringArr = m.split("");

  let hash = {};

  for (let i = 0; i < stringArr.length; i++) {
    if (nums.includes(stringArr[i])) {
      !hash[stringArr[i]] ? (hash[stringArr[i]] = 1) : hash[stringArr[i]]++;
    }

    if (nums.includes(mapped[stringArr[i]])) {
      !hash[mapped[stringArr[i]]]
        ? (hash[mapped[stringArr[i]]] = 1)
        : hash[mapped[stringArr[i]]]++;
    }
  }

  for (let x in hash) {
    result.push(hash[x])
  }

  console.log(Math.min(...result))

  return Math.min(...result)
};

maxCount(25, 2, "55");





