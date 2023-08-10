/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let result = [];
    fun(arr,0,result,n);
    // console.log(result)
    return result;
};
function fun(arr,currentLevel,result,n){
        arr.forEach((el)=>{
            if(Array.isArray(el) && currentLevel < n){
                fun(el ,currentLevel+1,result,n)
            }else{
                result.push(el)
            }
        })
}