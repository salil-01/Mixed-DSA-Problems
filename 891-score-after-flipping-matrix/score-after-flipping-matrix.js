/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    // applying greedy here 
    let m = grid[0].length; // row length
    let n = grid.length  // col length

    // flipping rows when first element in row is zero cos 0111 < 1000, binary
    for(let i=0; i<n; i++){
        if(grid[i][0]===0){
            // invert the complete row 
            for(let j=0; j<m; j++){
                if(grid[i][j]===0){
                    grid[i][j] = 1;
                }else{
                    grid[i][j] = 0;
                }
            }
        }
    }
    // flipping cols when count of 0's greater than count of 1's
    for(let i=0; i<m; i++){
        let zeroCount = 0;
        let oneCount = 0;
        for(let j=0; j<n; j++){
            if(grid[j][i]===0){
                zeroCount++;
            }else{
                oneCount++;
            }
        }
        if(zeroCount>oneCount){
           for(let j=0; j<n; j++){
                if(grid[j][i]===0){
                    grid[j][i] = 1;
                }else{
                    grid[j][i] = 0;
                }   
            } 
        }
    }
    // console.log(grid)
    let total = 0;
    for(let i=0; i<n; i++){
        let str = ""
        for(let j=0; j<m; j++){
            str += grid[i][j]
        }
        total += parseInt(str,2)
    }
    // console.log(total)
    return total;
};