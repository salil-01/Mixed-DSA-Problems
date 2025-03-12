/**
 * @param {number[]} colors
 * @return {number}
 */

const checkAlertnate = (prev, current, next) => {
    if (prev === next && prev !== current) {
        return true
    } else {
        return false
    }
}
var numberOfAlternatingGroups = function (colors) {
    let count = 0;
    for (let i = 0; i < colors.length; i++) {
        if (i == 0) {
            // first element 
            const isAlt = checkAlertnate(colors[colors.length - 1], colors[i], colors[i + 1]);
            if (isAlt) {
                count++
            }
        } else if (i === colors.length - 1) {
            // last element 
            const isAlt = checkAlertnate(colors[i - 1], colors[i], colors[0]);
            if (isAlt) {
                count++;
            }
        } else {
            const isAlt = checkAlertnate(colors[i - 1], colors[i], colors[i+1]);
            if (isAlt) {
                count++;
            }
        }

    }
    return count;
};