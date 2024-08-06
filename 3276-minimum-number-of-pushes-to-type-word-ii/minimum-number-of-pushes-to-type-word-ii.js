/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    // counting frequencies
    let obj = {};
    for (let i = 0; i < word.length; i++) {
        if (!obj[word[i]]) {
            obj[word[i]] = 1;
        } else {
            obj[word[i]]++;
        }
    }

    // sorting based on frequencies in desc so higher frequency one we will
    // assign the 1 key stroke
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
        total = total + (sortable[i][1] * priority);
        // if it;s the end increase the priority else keep inc current
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