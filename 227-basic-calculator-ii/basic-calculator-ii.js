/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let num = '';
    let preOperator = '+';
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) num += s[i];

        if (isNaN(s[i]) || i === s.length - 1) {
            if (preOperator === '+') stack.push(+num);
            if (preOperator === '-') stack.push(-num);
            if (preOperator === '*') stack.push(stack.pop() * num);
            if (preOperator === '/') stack.push(Math.trunc(stack.pop() / num));

            preOperator = s[i];
            num = '';
        }
    }

    return stack.reduce((total, cur) => total + cur, 0);
};