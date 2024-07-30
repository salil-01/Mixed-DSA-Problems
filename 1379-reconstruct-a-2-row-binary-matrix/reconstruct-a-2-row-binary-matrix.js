/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {

    // INITIALIZING WITH ZEROES 
    let matrix = []
    for (let i = 0; i < 2; i++) {
        let arr = []
        for (let j = 0; j < colsum.length; j++) {
            arr.push(0)
        }
        matrix.push(arr);
        arr = [];
    }

    // FILLING UP THE VALUES
    for (let j = 0; j < colsum.length; j++) {
        //THERE CAN BE THREE CONDITION => AS IT IS BINARY 
        if (colsum[j] == 1) {
            // we have decide where to put 1 
            //being greedy and whose sum is maximum will put there 
            if (upper > lower) {
                // put in upper
                matrix[0][j] = 1;
                if (upper > 0) {
                    upper--
                } else {
                    return []
                }


            } else {
                // put in lower 
                matrix[1][j] = 1;
                if (lower > 0) {
                    lower--
                } else {
                    return []
                }
            }


        } else if (colsum[j] === 2) {
            // we have to put 1 in both rows
            matrix[0][j] = 1;
            matrix[1][j] = 1;

            if (upper > 0 && lower > 0) {
                upper--;
                lower--;
            } else {
                return []
            }

        } else {
            // we have to put zero in both rows 
            matrix[0][j] = 0;
            matrix[1][j] = 0;
        }

    }

    if(upper==0 && lower==0){
        return matrix
    }
    return [];

};