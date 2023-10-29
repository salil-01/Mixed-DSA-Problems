/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
   nums = nums.sort((a,b)=>a-b);
   let min = Infinity;
   let res = 0;
    for(let i=0; i<nums.length-1; i++){
        let fixed = nums[i] //fixed pointer
        let left = i+1;
        let right = nums.length-1; 
        while(left<right){
            let sum = fixed + nums[left] + nums[right];
            if(sum===target){
                return sum;
            }else if (sum<target){
                left++
            }else{
                right--
            }
            let difference = Math.abs(sum-target);
            if(difference<min){
                min = difference;
                res = sum
            }
        }
    }
    // console.log(res)
    return res 
};