/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let strNum = x.toString();
    let res = "";
    if(strNum[0]==="-"){
        res += "-"
    }
    for(let i=strNum.length-1; i>=0; i--){
        if(strNum[i]==="-"){
            continue;
        }
        res += strNum[i];

    }
    res = Number(res);
    if(res > INT_MAX) return 0;
    if(res < INT_MIN) return 0;
    return res
};