/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0
    for(let i=0; i<details.length; i++){
        let age = details[i][11] + details[i][12];
        if(!isNaN(age)){
            if(Number(age)>60){
                count++;
            }
        }
    }
    return count
};