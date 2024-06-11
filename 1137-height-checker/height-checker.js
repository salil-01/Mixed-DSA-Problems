/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let expected = heights.toSorted((a,b)=>a-b);
    console.log(expected,heights)
    for(let i=0; i<heights.length; i++){
        if(heights[i]!==expected[i]){
            count++
        }
    }
    return count;
};