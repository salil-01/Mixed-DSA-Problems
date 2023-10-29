/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res = [];
    for(let i=0; i<l.length; i++){
        let temp = isArth(l[i],r[i],nums);
        res.push(temp);
    }
    // console.log(res)
    return res;
};
function isArth(start,end,arr){
    let temp = [];
    for(let i=start; i<=end; i++){
       temp.push(arr[i])
    }
    temp = temp.sort((a,b)=>a-b);
    for(let i=0; i<temp.length-1; i++){
        if( temp[i+1] - temp[i] !== temp[1] - temp[0]){
            return false;
        }
    }
    return true;
}