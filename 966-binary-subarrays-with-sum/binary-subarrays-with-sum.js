/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let obj = {0:1};
    let count = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        if(obj[sum-goal]){
            count += obj[sum-goal]
        }

        if(!obj[sum]){
            obj[sum] = 1
        }else{
            obj[sum]++
        }
    }
    return count;
};

//bruteforce solution by generating all the sub-arrays
// var numSubarraysWithSum = function(nums, goal) {
//     let subarrays = [];
//     for(let i=0; i<nums.length; i++){
//         for(let j=i; j<nums.length; j++){
//             let subarray = nums.slice(i,j+1);
//             subarrays.push(subarray);
//         }
//     }
//     // console.log(subarrays);
//     let count = 0;
//     for(let i=0; i<subarrays.length; i++){
//         let subarray = subarrays[i];
//         let total = 0;
//         for(let j=0; j<subarray.length; j++){
//             total += subarray[j];
//         }
//         // console.log(total)
//         if(total===goal){
//             count++;
//         }
//     }
//     // console.log(count);
//     return count;
// };