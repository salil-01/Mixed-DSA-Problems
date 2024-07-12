/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    let res = "";
    for(let i=0; i<s.length; i++){
        if(i===0 && (s[i]==="-" || s[i]==="+")){
            if(isNaN(s[i+1])){
                res += 0
            }else{
                res += s[i]
            }
            continue;
        }
        if(isNaN(s[i]) || s[i]===" "){
            break;
        }
        res += s[i]
    }
    // console.log(res)
    let number;
    if(res=== "+" || res === "-"){
        number = 0
    }else{
        number = Number(res)
    }
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    if (number > INT_MAX) return INT_MAX;
    if (number < INT_MIN) return INT_MIN;
    return number;
};