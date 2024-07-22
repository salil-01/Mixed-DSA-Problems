/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    let currentRowSum = new Array(rowSum.length).fill(0);
    let currentColSum = new Array(colSum.length).fill(0);
    // console.log(currentRowSum, currentColSum)

    let res = []
    // filling empty matrix of rowSum x colSum length with zeroes 
    for (let i = 0; i < rowSum.length; i++) {
        tempArr = []
        for (let j = 0; j < colSum.length; j++) {
            tempArr.push(0)
        }
        res.push(tempArr);
        tempArr = [];
    }

    for (let i = 0; i < rowSum.length; i++) {
        for (let j = 0; j < colSum.length; j++) {
            //being greddy and putting the minimum value after substracting also
            // updating row and col sum as welll
            let minValue = Math.min(rowSum[i] - currentRowSum[i], colSum[j] - currentColSum[j]);
            res[i][j] = minValue;
            currentRowSum[i] += minValue
            currentColSum[j] += minValue
        }
    }
    // console.log(res) 
    return res;
};