/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    for(let i=0; i<strs.length; i++){
        let sortedString = strs[i].split("").sort().join("");
        if(!obj[sortedString]){
            obj[sortedString] = [strs[i]]
        }else{
            obj[sortedString].push(strs[i])
        }
    }
    // console.log(obj)
    let res = []
    for(let key in obj){
        res.push(obj[key]);
    }
    return res;
};