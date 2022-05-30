// https://leetcode.com/problems/string-to-integer-atoi/


/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let i = parseInt(s)
    return !i ? 0 : i < -(2**31) ? -(2**31) : i > (2**31)-1 ? (2**31)-1 : i;
};



console.log(myAtoi("-91283472332"))