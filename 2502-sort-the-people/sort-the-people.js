/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let obj = {};

    for (let i = 0; i < heights.length; i++) {
        if (!obj[heights[i]]) {
            obj[heights[i]] = names[i]
        }
    }
    //    console.log(obj)
    names = [];

    for(let key in obj){
        names.push(obj[key])
    }
    return names.reverse();
};