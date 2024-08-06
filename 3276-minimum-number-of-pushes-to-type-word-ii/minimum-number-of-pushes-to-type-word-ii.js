/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {

    let obj = {};
    for (let i = 0; i < word.length; i++) {
        if (!obj[word[i]]) {
            obj[word[i]] = 1;
        } else {
            obj[word[i]]++;
        }
    }

    let sortable = [];
    for (let key in obj) {
        sortable.push([key, obj[key]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    let total = 0;
    let priority = 1;
    let current = 2;
    for (let i = 0; i < sortable.length; i++) {
        // console.log(sortable[i][0], sortable[i][1], priority)
        total = total + (sortable[i][1] * priority);
        if (current === 9) {
            priority++;
            current = 2;
        } else {
            current++;
        }
    }
    // console.log(total)
    return total
};