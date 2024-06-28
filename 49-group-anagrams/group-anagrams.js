/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let sortedString = strs[i].split("").sort().join("");
        if (!map.has(sortedString)) {
            map.set(sortedString, [strs[i]]);
        } else {
            map.get(sortedString).push(strs[i]);
        }
    }
    return Array.from(map.values());
};
