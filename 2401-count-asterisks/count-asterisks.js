/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let arr = s.split("|");
    let resStr = ""
    for(i=0; i<arr.length; i+=2){
        resStr += arr[i]
    }
    // console.log(resStr)
    let count = 0;
    for(let i=0; i<resStr.length; i++){
        if(resStr[i]==="*"){
            count++
        }
    }
    return count;
};