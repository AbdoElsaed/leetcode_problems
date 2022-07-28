let isValid = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "{": {
        result.push("}");
        break;
      }
      case "[": {
        result.push("]");
        break;
      }
      case "(": {
        result.push(")");
        break;
      }
      default: {
        if (result.pop() !== s[i]) {
          return false;
        }
      }
    }
  }

  return !result.length;
};
