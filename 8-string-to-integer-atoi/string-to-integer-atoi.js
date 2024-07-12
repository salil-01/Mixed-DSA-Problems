/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (i === 0 && (s[i] === "-" || s[i] === "+")) {
            if (isNaN(s[i + 1])) {
                // checking if the value after + or - can't be converted in number add 0
                res += 0
            } else {
                // else add that sign
                res += s[i]
            }
            continue;
        }
        if (isNaN(s[i]) || s[i] === " ") {
            // if the current string can't be converted to number break or
            // putting addition check for empty string as isNaN(" " || "") givers 
            // value as false 
            break;
        }
        res += s[i]
    }
    // console.log(res)
    let number;
    if (res === "+" || res === "-") {
        // checking if there are only + or - in string putting 0
        number = 0
    } else {
        // else converting it to numbers and removing the leading zeroes
        number = Number(res)
    }
    // checking if the value are overflowing return the min or max respectively
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    if (number > INT_MAX) return INT_MAX;
    if (number < INT_MIN) return INT_MIN;
    return number;
};