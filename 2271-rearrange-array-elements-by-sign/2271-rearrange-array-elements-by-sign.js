/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let arr = new Array(nums.length+1).fill(0);
    let mid = Math.floor(arr.length/2); //mid point
    let pos = 0; //to keep track of +ive 
    let neg = mid+1 // to keep track of -ive

    // storing positive on right side of new array and 
    // negative on left side of new array
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            arr[pos] = nums[i];
            pos++;
        }else{
            arr[neg] = nums[i];
            neg++;
        }
    }
    // console.log(arr)
    pos = 0;
    neg = mid+1;
    // swapping the elements from arr to nums
    for(let i=0; i<nums.length; i++){
       if(i%2===0){
           nums[i] = arr[pos];
           pos++
       }else{
           nums[i] = arr[neg];
           neg++
       }
    }
    // console.log(nums)
    return nums;
};