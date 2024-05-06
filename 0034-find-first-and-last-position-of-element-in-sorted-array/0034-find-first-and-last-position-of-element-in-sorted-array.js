/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const first = firstOccurance(nums,nums.length,target);
    const last = lastOccurance(nums,nums.length,target);
    // console.log([first,last])
    return [first,last]
};

function firstOccurance(arr,n,key){
    let low = 0;
    let high = n-1;
    let res = -1;
    while(low<=high){
       let mid =  Math.floor(low+(high-low)/2);
        if(key===arr[mid]){
            res = mid;
            high = mid-1;
        }else if(key<arr[mid]){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return res;
}
function lastOccurance(arr,n,key){
    let low = 0;
    let high = n-1;
    let res = -1;
    while(low<=high){
       let mid =  Math.floor(low+(high-low)/2);
        if(key===arr[mid]){
            res = mid;
            low = mid+1;
        }else if(key<arr[mid]){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return res;
}