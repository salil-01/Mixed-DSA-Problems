/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let rowMins = [];
    let colMax = [];

    let m = matrix.length // no of rows
    let n = matrix[0].length // no of columns

    for (let i = 0; i < n; i++) {
        colMax.push(-Infinity)
    }
    for (let i = 0; i < m; i++) {
        let min = Infinity
        for (let j = 0; j < n; j++) {
            //min for each row
            if (matrix[i][j] < min) {
                min = matrix[i][j]
            }
            //max for each column
            if (matrix[i][j] > colMax[j]) {
                colMax[j] = matrix[i][j]
            }
        }
        rowMins.push(min);
        min = Infinity;
    };

    let res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(matrix[i][j]=== rowMins[i] && matrix[i][j]===colMax[j]){
                res.push(matrix[i][j])
            }
        }
    };
    // console.log(res)
    return res;
};