/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let obj = {};
    for(let i=0; i<arr1.length; i++){
        if(!obj[arr1[i]["id"]]){
            obj[arr1[i]["id"]] = arr1[i];
        }
    }
    // console.log(obj)
    for(let i=0; i<arr2.length; i++){
        if(!obj[arr2[i]["id"]]){
            obj[arr2[i]["id"]] = arr2[i];
        }else{
            obj[arr2[i]["id"]] = {...obj[arr2[i]["id"]],...arr2[i]};
        }
    }
    // console.log(obj);
    let res = Object.values(obj);
    return res;
};