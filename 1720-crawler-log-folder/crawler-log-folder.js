/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    // using a variable to maintain where are we
    let initial = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === "../" && initial > 0) {
            initial--
        } else if (logs[i] !== "../" && logs[i] !== "./") {
            initial++
        }
    }
    console.log(initial)
    return initial
};