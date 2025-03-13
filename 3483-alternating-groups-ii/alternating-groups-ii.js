/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */

// const checkAlt = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return false
//         }
//     }
//     return true
// }
var numberOfAlternatingGroups = function (colors, k) {
    let altCount = 1;
    let res = 0;
    let lastColor = colors[0]

    for (let i = 0; i < colors.length + k - 1; i++) {
        const idx = i % colors.length;
        if (colors[idx] === lastColor) {
            altCount = 1;
            lastColor = colors[idx];
            continue;
        }

        altCount++;
        if (altCount >= k) {
            res++;
        }

        lastColor = colors[idx];
    }
    return res;
};