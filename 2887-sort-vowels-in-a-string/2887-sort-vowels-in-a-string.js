/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let tempStr = "";
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            tempStr += s[i]
        }
    }
    // console.log(tempStr);
    tempStr = tempStr.split("").sort().join("");
    // console.log(tempStr);
    let res = "";
    let j = 0;
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            res += tempStr[j++]
        }else{
            res += s[i]
        }
    }
    // console.log(res);
    return res;
};