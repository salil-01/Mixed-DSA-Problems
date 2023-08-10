/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let obj = {}
    let res = [];
    for(let i=0; i<nums.length-1; i++){
        let fixed = nums[i] //fixed pointer
        let left = i+1;
        let right = nums.length-1;
        
        while(left<right){
            if(fixed + nums[left] + nums[right]===0){
                //storing only distinct triplet in res
                let temp = ""+fixed+nums[left]+nums[right];
                if(!obj[temp]){
                    obj[temp] = 1;
                    res.push([fixed,nums[left],nums[right]])
                }
                left++;
                right--;
            }else if (fixed + nums[left] + nums[right] < 0){
                left++
            }else{
                right--
            }
        }
    }
    // console.log(res)
    return res
    // remove non unique 
};