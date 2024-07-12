/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    if (x < y) {
        //remove all the ba first and then remove ab
        let max = 0;
        let stack = []
        // removes ba and puts all other in stack
        for (let i = 0; i < s.length; i++) {
            if (i === 0) {
                stack.push(s[i]);
                continue;
            }
            if (s[i] === "a" && stack[stack.length - 1] === "b") {
                stack.pop();
                max += y
            } else {
                stack.push(s[i])
            }
        }
        // looking up for remaining ab in stack
        let tempStack = []
        for (let i = 0; i < stack.length; i++) {
            if (i === 0) {
                tempStack.push(stack[i]);
                continue;
            }
            if (stack[i] === "b" && tempStack[tempStack.length - 1] === "a") {
                max += x;
                tempStack.pop();
            } else {
                tempStack.push(stack[i])
            }
        }
        return max
    } else {
        //remove all the ab first and then remove ba
        let max = 0;
        let stack = []
        // removes ab and puts all other in stack
        for (let i = 0; i < s.length; i++) {
            if (i === 0) {
                stack.push(s[i]);
                continue;
            }
            if (s[i] === "b" && stack[stack.length - 1] === "a") {
                stack.pop();
                max += x
            } else {
                stack.push(s[i])
            }
        }
           // looking up for remaining ba in stack
        let tempStack = []
        for (let i = 0; i < stack.length; i++) {
            if (i === 0) {
                tempStack.push(stack[i]);
                continue;
            }
            if (stack[i] === "a" && tempStack[tempStack.length - 1] === "b") {
                max += y;
                tempStack.pop();
            } else {
                tempStack.push(stack[i])
            }
        }
        return max
    }
};