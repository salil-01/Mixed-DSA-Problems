/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
    let indexes = positions.map((_, i) => i);
    indexes.sort((a, b) => positions[a] - positions[b]);
    positions = indexes.map(i => positions[i]);

    let stack = [];
    for (let i = 0; i < indexes.length; i++) {
        if (directions[indexes[i]] === "R") {
            // add to stack
            stack.push(indexes[i]);
        } else {
            while (stack.length !== 0 && healths[indexes[i]] > 0) {
                // there can be three case;
                let topElement = stack[stack.length - 1];
                stack.pop();
                if (healths[topElement] === healths[indexes[i]]) {
                    // 1. if both are equal then make it zero and remove from the stack
                    healths[indexes[i]] = 0;
                    healths[topElement] = 0;

                } else if (healths[topElement] < healths[indexes[i]]) {
                    // 2. health of new Element greateer than health of element
                    // at the top of stack
                    healths[indexes[i]] -= 1;
                    healths[topElement] = 0;
                } else {
                    // 3. health of new element less than health of element
                    // at the top of stack 
                    healths[indexes[i]] = 0;
                    healths[topElement] -= 1;
                    stack.push(topElement) // adding the top element as it's not destrooyed yet 
                }

            }
        }
    }

    stack = [];
    for(let i=0; i<healths.length; i++){
        if(healths[i]) stack.push(healths[i])
    }
    // console.log(healths)
    return stack;
};